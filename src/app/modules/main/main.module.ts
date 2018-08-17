import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './views/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { ServicesModule } from './snippets/services/services.module';
import { CommonModule } from '@angular/common';
import { UserManageComponent } from './views/user-manage/user-manage.component';
import { QuestionManageComponent } from './views/question-manage/question-manage.component';
import { ExampaperManageComponent } from './views/exampaper-manage/exampaper-manage.component';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ExamComponent } from './views/take-exam/exam.component';
import { ExampaperComponent } from './views/exampaper-list/exampaper.component';
import { ExampaperDetailComponent } from './views/exampaper-detail/exampaper-detail.component';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    MainRoutingModule,
    ServicesModule,
    CommonModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    // BrowserModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      MainComponent,
      HomeComponent,
      UserManageComponent,
      QuestionManageComponent,
      ExampaperManageComponent,
      ExamComponent,
      ExampaperComponent,
      ExampaperDetailComponent
  ]
})
export class MainModule { }
