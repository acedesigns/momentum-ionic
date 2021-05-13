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

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LayoutPage,
    children: [
      {
                path: 'feed',
                loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule )
            },
            {
                path: 'account',
                loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
            },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/feed',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
