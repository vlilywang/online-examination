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
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    MainRoutingModule,
    ServicesModule,
    CommonModule,
    NgZorroAntdModule.forRoot(),
    FormsModule
    // BrowserModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      MainComponent,
      HomeComponent,
      UserManageComponent,
      QuestionManageComponent,
      ExampaperManageComponent
  ]
})
export class MainModule { }
