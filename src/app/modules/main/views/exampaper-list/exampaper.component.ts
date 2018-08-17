import { Component, OnInit } from '@angular/core';
import { ExampaperService } from '../../snippets/services/exampaper.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exampaper',
  templateUrl: './exampaper.component.html',
  styleUrls: ['./exampaper.component.less']
})
export class ExampaperComponent implements OnInit {

  // 学生视图
  exampapers = [];
  totalAmount: number;
  page: number;
  pageSize = 10;
  constructor(
    private exampaperService: ExampaperService,
    private msg: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.page = 1;
    this.exampaperService.getExampapers(this.page, this.pageSize).subscribe(val => {
      this.exampapers = val.data;
      this.totalAmount = val.dataCount;
    });
  }

  gotoDetail(id: number) {
    this.router.navigateByUrl(`/app/exampaper-detail/${id}`);
  }
  takeExam(id: number) {
    this.router.navigateByUrl(`/app/take-exam/${id}`);
  }
}
