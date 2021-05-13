/* =======================================================
 *
 * Created by anele on 2020/05/13.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { StorageService } from "../../services/storage.service";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.component.html',
    styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {

    withDrawModal: FormGroup;

    constructor( private modalCtrl: ModalController, private httpService: HttpService,
                 private fb: FormBuilder, private storageService: StorageService ) {
        this.withDrawModal = this.fb.group({
            amount   : new FormControl('', Validators.required),
        })
    }


    ngOnInit(): void {
        let token = this.storageService.getToken();
        token.then((data)=> {
            this.withDrawModal.patchValue({
                //id: data.UID,
                //email: data.email,
            });
        });
    }


    dismiss() {
        this.modalCtrl.dismiss();
    }


    modalSubmit(form: any) {
        console.log("Withdrawing");
        console.log(form.value);
        // this.httpService.postData('accounts', form.value).subscribe(
        //     (data) => {
        //         if(data.code == 200) {
        //             this.modalCtrl.dismiss();
        //         }
        //     }
        // )
    }

}
