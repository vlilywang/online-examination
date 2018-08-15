import { CanActivate } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }
    isLoggedIn = false;
    redirectUrl: string;
    login(val: any): Observable<boolean> {
        // const url = `${this.config.server}/login`;
        const url = `/auth/login`;
        console.log('url:' + url);
        const params = 'username=' + val.username + '&password=' + val.password;
        return this.http.post(url, params, {
            responseType: 'text' as 'text',
            headers: new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'})
        }).pipe(map((res: any) => {
            console.log('res: ' + res);
            return res;
        }));
    }
    loadAuth(): Observable<any> {
        const url = `${this.config.server}/user/current`;
        return this.http.get(url).pipe(
            map(res => {
                return res;
            })
        );
    }

     logout(val?: any): Observable<any> {
        const url = `${this.config.server}/logout`;
        return this.http.get(url).pipe(
            map(res => res)
        );
     }
}

