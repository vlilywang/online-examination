import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  menus = [
    { name: '首页', url: '/app/home' },
    { name: '试题管理', url: '/app/question' },
    { name: '试卷管理', url: '/app/exampaper' },
    { name: '考试管理', url: '/app/grade' },
    { name: '用户管理', url: '/app/user' }
  ];
}
