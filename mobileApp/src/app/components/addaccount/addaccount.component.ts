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
    selector: 'app-addaccount',
    templateUrl: './addaccount.component.html',
    styleUrls: ['./addaccount.component.scss'],
})
export class AddAccountComponent implements OnInit {

    accountModal: FormGroup;

    constructor( private modalCtrl: ModalController, private httpService: HttpService,
                 private fb: FormBuilder, private storageService: StorageService) {

        this.accountModal = this.fb.group({
            email   : new FormControl('', Validators.required),
            id      : new FormControl('', Validators.required),
            account_type: new FormControl('', Validators.required),
            account_number: new FormControl(Math.floor(Math.random() * 1000000000), Validators.required),
            account_balance: new FormControl(0, Validators.required),
            account_overdraft: new FormControl(0, Validators.required),
        })
    }


    ngOnInit(): void {
        let token = this.storageService.getToken();
        token.then((data)=> {
            this.accountModal.patchValue({
                id: data.UID,
                email: data.email,
            });
        });
    }


    dismiss() {
        this.modalCtrl.dismiss();
    }


    modalSubmit(form: any) {
        this.httpService.postData('accounts', form.value).subscribe(
            (data) => {
                if(data.code == 200) {
                    this.modalCtrl.dismiss();
                }
            }
        )
    }


}
