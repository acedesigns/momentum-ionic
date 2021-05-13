/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: 'layout',
                loadChildren: () => import('../layout/layout.module').then( m => m.LayoutPageModule)
            },
            {
                path: 'account',
                loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class MenuPageRoutingModule {}
