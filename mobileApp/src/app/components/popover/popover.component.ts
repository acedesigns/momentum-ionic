/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
})

export class PopoverComponent implements OnInit {


    constructor( public popoverCtrl: PopoverController ) { }


    ngOnInit() {}


    closePopUp() { this.popoverCtrl.dismiss(); }

}
