import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    canLoad(route: Route) {
        if (document.querySelector('preloader-hidden')) {
            document.querySelector('preloader-hidden').className = 'preloader';
        }
        return true;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const url: string = state.url;
        return this.checkLogin(url);
    }
    constructor (
        private authService: AuthService,
        private router: Router
    ) {}

    checkLogin(url: string): boolean {
        this.authService.login({username: 'admin', password: 'admin'}).subscribe(res => {
            console.log('aaaaaaaaaaa' + res);
        });
        if (this.authService.isLoggedIn) {
            return true;
        }
        console.log('url:' + url);
        this.authService.redirectUrl = url;
        this.router.navigate(['/passport/login']);
        return true;
    }
}

