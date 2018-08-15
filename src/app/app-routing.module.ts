import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/service/auth-guard.service';

const routes: Routes = [
    {
        path: 'app',
        loadChildren: './modules/main/main.module#MainModule',
        // canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}
