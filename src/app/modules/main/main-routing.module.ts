import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionManageComponent } from './views/question-manage/question-manage.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';
import { ExampaperManageComponent } from './views/exampaper-manage/exampaper-manage.component';
import { UserManageComponent } from './views/user-manage/user-manage.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent},
            { path: 'question', component: QuestionManageComponent},
            { path: 'exampaper', component: ExampaperManageComponent},
            { path: 'user', component: UserManageComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
