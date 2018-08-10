import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainComponent } from './views/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
