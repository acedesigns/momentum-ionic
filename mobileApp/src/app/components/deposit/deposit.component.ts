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
    selector: 'app-deposit',
    templateUrl: './deposit.component.html',
    styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {

    depositModal: FormGroup;

    constructor(private modalCtrl: ModalController, private httpService: HttpService,
                private fb: FormBuilder, private storageService: StorageService) {
        this.depositModal = this.fb.group({
            amount   : new FormControl('', Validators.required),
        })
    }


    ngOnInit(): void {
        let token = this.storageService.getToken();
        token.then((data)=> {
            this.depositModal.patchValue({
                id: data.UID,
                email: data.email,
            });
        });
    }


    dismiss() {
        this.modalCtrl.dismiss();
    }


    modalSubmit(form: any) {
        console.log("Depositing");
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
