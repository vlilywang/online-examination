import { Component, OnInit } from '@angular/core';
import { UserService } from '../../snippets/services/user.service';
import { GradeService } from '../../snippets/services/grade.service';
import { ExampaperService } from '../../snippets/services/exampaper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  grades = [];
  // searchExampaper = '';
  keyword = '';
  exampaperFilter = [];
  page: number;
  pageSize = 10;
  totalAmount: number;
  filter: any;
  beginTime = '';
  endTime = '';
  exampaperId: any;
  userId: number;
  constructor(
    private gradeService: GradeService,
    private exampaperService: ExampaperService
  ) {
  }

  ngOnInit() {
    this.page = 1;
    this.exampaperId = null;
    this.userId = null;
    this.exampaperService.getExampapers(this.page, this.pageSize).subscribe(
      val => {
        this.filter = val.data;
        for (let i = 0; i < this.filter.length; i++) {
          this.exampaperFilter[i] = { text: this.filter[i].title, value: this.filter[i].id };
        }
      }
    );
    this.gradeService.getGrades(this.page, this.pageSize).subscribe(
      val => {
        this.grades = val.data;
        this.totalAmount = val.dataCount;
      }
    );
  }

  // 通过试卷筛选
  filterPaperChange(value: any): void {
    this.exampaperId = value;
    this.search();
  }
  pageIndexChange(event: any): void {
    this.page = event;
    this.search();
  }
  refresh() {
    this.page = 1;
    this.exampaperId = null;
    this.userId = null;
    this.beginTime = '';
    this.endTime = '';
    this.gradeService.getGrades(this.page, this.pageSize).subscribe(
      val => {
        this.grades = val.data;
        this.totalAmount = val.dataCount;
      }
    );
  }
  search(): void {
    this.gradeService.getGrades(this.page, this.pageSize, this.userId, this.exampaperId, this.beginTime, this.endTime).subscribe(
      val => {
        this.grades = val.data;
        this.totalAmount = val.dataCount;
      }
    );
  }

}
