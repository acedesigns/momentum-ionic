/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { FeedPage } from "./feed.page";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FeedPageRoutingModule } from "./feed-routing.module";
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        FeedPageRoutingModule
    ],

    declarations: [FeedPage]
})
export class FeedPageModule {}
