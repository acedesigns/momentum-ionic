/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule
    ],

    declarations: [AboutPage]

})
export class AboutPageModule {}
