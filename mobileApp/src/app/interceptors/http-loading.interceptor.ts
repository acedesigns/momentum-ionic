/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from "@angular/core";
import { Observable, throwError, from } from "rxjs";
import { AuthService } from "../services/auth.service";
import { StorageService } from "../services/storage.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { map, catchError, switchMap, finalize } from "rxjs/operators";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";

@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private loadingCtrl: LoadingController, private auth: AuthService,
                private storageService: StorageService,
                private alertCtrl: AlertController ) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loadingCtrl.getTop().then((hasLoading) => {
            if (!hasLoading) {
                this.loadingCtrl.create({
                    message: 'Please wait...',
                    animated: true,
                    backdropDismiss: false,
                    keyboardClose: false
                }).then( loading => loading.present() );
            }
        });

        return from( this.storageService.getToken() ).pipe(
            switchMap( token => {
                if ( token ) {
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token.token ) });
                }

                if (!request.headers.has('Content-Type')) {
                    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                }

                return next.handle(request).pipe(
                    map( ( event: HttpEvent<any> ) => {
                        if ( event instanceof HttpResponse ) {
                            if ( event.status === 200 || event.status === 201) {
                                this.loadingCtrl.dismiss();
                            }
                        }
                        return event;
                    }),
                    catchError((error: HttpErrorResponse) => {

                        this.loadingCtrl.dismiss();

                        const reason = error.error.error || error.error.errors || error.error.message;


                        if ( error.status === 401 ) {
                            if ( error.error.message === "Token has expired") {
                                this.tokenExpired(error.error.message);
                                return;
                            } else {
                                this.presentFailedAlert( reason );
                                return;
                            }
                        }

                        if ( error.status === 404 || error.status === 500 ) {
                            this.presentFailedAlert( reason );
                            return;
                        }

                        this.presentFailedAlert( reason );
                        return throwError(error);
                    }),
                    finalize (() => {
                        this.loadingCtrl.dismiss();
                    })
                );
            })
        );
    }


    async presentFailedAlert( reason: any ): Promise<any> {

        if ( typeof reason === 'object' && reason !== null) {

            for ( const key in reason ) {
                let messageErr = '';
                if (reason.hasOwnProperty(key)) {
                    messageErr = reason[key] + '\n';
                }
                this.alertCtrl.create({
                    header: 'Something went wrong',
                    message: messageErr,
                    backdropDismiss: false,
                    keyboardClose: false,
                    buttons: ['OK']
                }).then((res) => {
                    res.present();
                });
            }
        } else {
            const alert: any = await this.alertCtrl.create({
                header: 'Something went Wrong ',
                message: reason,
                buttons: ['OK']
            });
            await alert.present();
        }

    }


    async tokenExpired( reason: string ): Promise<any> {
        const alert: any = await this.alertCtrl.create({
            header: 'Something went Wrong!',
            message: 'Session has expired. Log in again',
            buttons: [
                {
                    text: 'Ok',
                    handler: (data) => {
                        console.log(data);
                        //this.auth.logout();
                    }
                }
            ]
        });
        await alert.present();
    }

}
