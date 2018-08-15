import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PassportComponent } from './passport/passport.component';


const routes: Routes = [
    {
        path: 'passport',
        component: PassportComponent,
        children: [
            // { path: '', redirectTo: 'login', pathMatch: 'full'},
            { path: 'login', component: LoginComponent,
            data: { title: '登录', titleI18n: 'pro-login'}
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PassportRoutingModule {}
