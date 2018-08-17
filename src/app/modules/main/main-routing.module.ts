import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionManageComponent } from './views/question-manage/question-manage.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';
import { ExampaperManageComponent } from './views/exampaper-manage/exampaper-manage.component';
import { UserManageComponent } from './views/user-manage/user-manage.component';
import { ExampaperComponent } from './views/exampaper-list/exampaper.component';
import { ExamComponent } from './views/take-exam/exam.component';
import { ExampaperDetailComponent } from './views/exampaper-detail/exampaper-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'question', component: QuestionManageComponent },
            { path: 'exampaper', component: ExampaperManageComponent },
            { path: 'user', component: UserManageComponent },
            { path: 'stu-exam', component: ExampaperComponent },
            { path: 'take-exam/:id', component: ExamComponent },
            { path: 'exampaper-detail/:id', component: ExampaperDetailComponent },
            // { path: 'exam-detail/:id', component: }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
