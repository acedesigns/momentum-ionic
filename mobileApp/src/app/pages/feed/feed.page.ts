/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { HttpService } from "../../services/http.service";
import { StorageService } from "../../services/storage.service";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DepositComponent } from "../../components/deposit/deposit.component";
import { WithdrawComponent } from "../../components/withdraw/withdraw.component";
import { AddAccountComponent } from "../../components/addaccount/addaccount.component";

@Component({
    selector: 'app-feed',
    templateUrl: './feed.page.html',
    styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, AfterViewInit {


    myAccounts: any;
    empty: boolean = true;

    constructor( private httpService: HttpService, private storageService: StorageService,
                 public modalCtrl: ModalController,  public router: Router,) {}


    ngOnInit(): void {
        let token = this.storageService.getToken();
        token.then((data)=> {
            this.getMyAccounts(data.UID);
        });

    }


    ngAfterViewInit() {}


    getMyAccounts(userID: string) {

        this.httpService.getData('accounts/'+ userID).subscribe((data) => {
            //console.log(data);
            if (data.accounts.length > 0 ) {
                this.empty = false;
                this.myAccounts = data.accounts;
            } else {
                this.empty = true;
            }
        });
    }


    async presentAddAccount() {

        const modal: any = await this.modalCtrl.create({
            component: AddAccountComponent,
            cssClass: 'my-add-class',
            //componentProps: { value: userData },
            showBackdrop: true,
            animated: true,
            backdropDismiss: false,
            keyboardClose: false
        });
        modal.onWillDismiss()
            .then((data) => {
                console.log(data);
                //this.router.navigate(['menu/layout']);
                window.location.reload()
            });

        return await modal.present();
    }


    async withdrawFromAccount() {
        const modal: any = await this.modalCtrl.create({
            component: WithdrawComponent,
            //componentProps: { value: userData },
            showBackdrop: true,
            animated: true,
            backdropDismiss: false,
            keyboardClose: false
        });
        modal.onWillDismiss()
            .then((data) => {
                console.log(data);
                //this.router.navigate(['menu/layout']);
                //window.location.reload()
            });

        return await modal.present();
    }


    async depositToAccount() {
        const modal: any = await this.modalCtrl.create({
            component: DepositComponent,
            showBackdrop: true,
            animated: true,
            backdropDismiss: false,
            keyboardClose: false
        });
        modal.onWillDismiss()
            .then((data) => {
                console.log(data);
                //this.router.navigate(['menu/layout']);
                //window.location.reload()
            });

        return await modal.present();
    }


}
