/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from "@ionic/storage-angular";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpRequestInterceptor } from './interceptors/http-loading.interceptor';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [AppComponent],

    entryComponents: [],

    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot({
            name: '__mydb-mometum',
            driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
        }),
        AngularFireModule.initializeApp(environment.firebase),
    ],

    providers: [
        Storage,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
