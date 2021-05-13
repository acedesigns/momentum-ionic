/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { LayoutPage } from './layout.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LayoutPageRoutingModule } from './layout-routing.module';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LayoutPageRoutingModule
    ],

    declarations: [LayoutPage]
})
export class LayoutPageModule {}
