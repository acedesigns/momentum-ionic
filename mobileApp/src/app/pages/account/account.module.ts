/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountPage } from './account.page';
import { CommonModule } from '@angular/common';
import { AccountPageRoutingModule } from './account-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccountPageRoutingModule
    ],

    declarations: [AccountPage]
})
export class AccountPageModule {}
