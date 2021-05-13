/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

    appConfig = {
        apiUrl      : 'http://127.0.0.1:8083/',
        headers     : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Accept'			: 'application/json',
            'X-Requested-With' 	: 'XMLHttpRequest',
            'Access-Control-Allow-Origin'	: '*',
            'Access-Control-Allow-Methods'	: 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'	: '*',
        }),
    };


    constructor( private http: HttpClient ) {}


    getData(verb: string ): Observable<any> {
        return this.http.get( this.appConfig.apiUrl + verb, {headers : this.appConfig.headers});
    }


    postData(verb: string, data: any ): Observable<any> {
        return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
    }

}
