/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    pages = [
        {
            title : 'Explore',
            url : '/menu/layout'
        },
    ];

    selectedPath = '';
    currentYear: any | string;


    constructor( private router: Router, private auth: AuthService, ) {

        this.router.events.subscribe((event: RouterEvent) => {
                if (event && event.url) {
                   this.selectedPath = event.url;
                }
            }
        );

        this.currentYear =  new Date().getFullYear().toString();
    }



    ngOnInit(): void {}



    logUserOut(): void {
        this.auth.logout();
    }

}
