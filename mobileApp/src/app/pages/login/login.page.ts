/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;
    showPassword = false;
    passwordToggleIcon = 'eye';

    constructor( private formBuiler: FormBuilder, private auth: AuthService) {
                  this.loginForm = this.formBuiler.group({
                      email: new FormControl('bob@email', [ Validators.minLength(2), Validators.email ]),
                      password: new FormControl('password', Validators.minLength(4)),
                  });
    }



    ngOnInit(): void {}



    togglePassword(): void {
        this.showPassword = !this.showPassword;
        if ( this.passwordToggleIcon === 'eye' ) {
            this.passwordToggleIcon = 'eye-off';
        } else {
            this.passwordToggleIcon = 'eye';
        }
    }


    doLogInAction( form: any ) {

        this.auth.logUserIn(form.value)
            .then(
                (data) => {
                    console.log("Log Inn data");
                    console.info(data);
                }
            )
            .catch(err => console.log('Login page err',err))

    }

}
