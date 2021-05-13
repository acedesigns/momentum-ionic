/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        IonicModule,
        CommonModule,
        ReactiveFormsModule,
        LoginPageRoutingModule
    ],

    declarations: [LoginPage]
})
export class LoginPageModule {}
