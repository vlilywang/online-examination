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
  searchExampaper = '';
  keyword = '';
  exampaperFilter = [];
  page: number;
  pageSize = 10;
  totalAmount: number;
  filter: any;
  constructor(
    private gradeService: GradeService,
    private exampaperService: ExampaperService
  ) {
  }

  ngOnInit() {
    this.exampaperService.getExampapers(1, 20).subscribe(
      val => {
        this.filter = val.data.content;
        for (let i = 0; i < this.filter.length; i++) {
          this.exampaperFilter[i] = { text: this.filter[i].title, value: this.filter[i].id };
        }
      }
    );
    this.gradeService.getGrades(1, 20, 1, 9).subscribe(
      val => {
        this.grades = val.data.content;
        this.totalAmount = val.dataCount;
      }
    );
  }

  // 通过试卷筛选
  filterPaperChange(value: any): void {
    this.searchExampaper = value;
    this.search();
  }
  pageIndexChange(event: any): void {
    this.page = event;
    this.search();
  }
  // tslint:disable-next-line:member-ordering
  // sortMap = {
  //   grade: null
  // };
  // tslint:disable-next-line:member-ordering
  // sortName = null;
  // tslint:disable-next-line:member-ordering
  // sortValue = null;
  // sort(sortName: string, value: string): void {
  //   console.log(sortName);
  //   // this.sortName = sortName;
  //   // this.sortValue = value;
  //   // this.search();
  // }
  search(): void {

  }
  // 删除
  // 筛选 search
}
