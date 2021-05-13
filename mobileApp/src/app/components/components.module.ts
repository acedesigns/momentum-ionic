/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { PopoverComponent } from "./popover/popover.component";
import { DepositComponent } from "./deposit/deposit.component";
import { WithdrawComponent } from "./withdraw/withdraw.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddAccountComponent } from "./addaccount/addaccount.component";

@NgModule({

    declarations: [ PopoverComponent, AddAccountComponent, DepositComponent, WithdrawComponent ],

    exports: [ PopoverComponent, AddAccountComponent, DepositComponent, WithdrawComponent ],

    imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ]
})
export class ComponentsModule {}
