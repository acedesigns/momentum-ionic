/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from "@angular/router";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor( private router: Router,  public afAuth: AngularFireAuth ) {}


    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean> | Promise<boolean> {
        return new  Promise((resolve, reject) => {
            this.afAuth.authState.subscribe( (user) => {
                if (user) {
                    resolve(true);
                } else {
                    console.log('User is not logged in');
                    this.router.navigate(['/login']);
                    resolve(false);
                }
            });
        });
    }

}
