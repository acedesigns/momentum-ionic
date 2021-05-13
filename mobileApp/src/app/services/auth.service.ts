/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { Router } from "@angular/router";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { StorageService } from "./storage.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject, Observable, from, throwError } from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthService {

    public myUser: Observable<any>;
    //private userData = new BehaviorSubject(null);
    userData: any;

    constructor( private storage: StorageService,
                 public ngZone: NgZone,
                 public afs: AngularFirestore, public router: Router,
                 public afAuth: AngularFireAuth ) {
        this.checkLogInState();
    }


    checkLogInState() {

        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                const dataToSave = {
                    token:  this.userData.za,
                    UID:    this.userData.uid,
                    email:  this.userData.email
                };

                this.storage.saveUserInfo(dataToSave);
                this.router.navigate(['menu/layout']);
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
                this.router.navigate(['/login']);
            }
        })

    }



    async  logUserIn(credentials: any): Promise<any> {

        return await this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                this.userData = response;
                localStorage.setItem('user', JSON.stringify(this.userData));
                //JSON.parse(localStorage.getItem('user'));

                this.ngZone.run(() => {
                    this.router.navigate(['menu/layout']);
                });
            })
            .catch(err => {
                console.log('Something is wrong:',err.message);
            });


    }

    logout(){
        this.afAuth.signOut();
        localStorage.removeItem('user')
    }

}
