/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

const USER_KEY = 'user_info';

@Injectable({providedIn: 'root'})

export class StorageService {

    private _storage: Storage | null = null;

    constructor( private storage: Storage ) { this.init(); }

    async init() {
        // If using, define drivers here: await this.storage.defineDriver(/*...*/);
        const storage = await this.storage.create();
        this._storage = storage;
    }


    getUserInfo(): Promise<any> {
        return this.storage.get(USER_KEY);
    }


    getToken(): Promise<any> {
        return this.storage.get(USER_KEY).then( token => token );
    }


    clearAllStorage(): Promise<any> {
        return this.storage.clear();
    }


    saveUserInfo(user: any): Promise<any> {
        return this.storage.set(USER_KEY, user);
    }


}
