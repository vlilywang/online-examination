import { Component, OnInit } from '@angular/core';
import { ExampaperService } from '../../snippets/services/exampaper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-exampaper-manage',
  templateUrl: './exampaper-manage.component.html',
  styleUrls: ['./exampaper-manage.component.less']
})
export class ExampaperManageComponent implements OnInit {

  exampapers = [];
  totalAmount: number;
  page: number;
  pageSize = 10;

  // 表单
  addForm: FormGroup;

  // 对话框
  isAddVisible = false;
  isDeleteVisible = false;

  constructor(
    private exampaperService: ExampaperService,
    private fb: FormBuilder,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.exampaperService.getExampapers(this.page, this.pageSize).subscribe(val => {
      this.exampapers = val.data.content;
      this.totalAmount = val.dataCount;
    });
    this.addForm = this.fb.group({
      title: [null, [Validators.required]],
      keyword: [null, [Validators.required]],
      singleAmount: [null, [Validators.required]],
      multiAmount: [null, [Validators.required]],
      judgeAmount: [null, [Validators.required]]
    });
  }

  addExampaper() {
    if (!this.addForm.value.title) {
      this.msg.warning('标题不能为空');
      return;
    }
    if (!this.addForm.value.keyword) {
      this.msg.warning('关键词不能为空');
      return;
    }
    if (!this.addForm.value.singleAmount) {
      this.msg.warning('单选题个数不能为空');
      return;
    }
    if (!this.addForm.value.multiAmount) {
      this.msg.warning('多选题个数不能为空');
      return;
    }
    if (!this.addForm.value.judgeAmount) {
      this.msg.warning('判断题个数不能为空');
      return;
    }
    // tslint:disable-next-line:max-line-length
    this.exampaperService.addExampaper(this.addForm.value.title, this.addForm.value.keyword, this.addForm.value.singleAmount, this.addForm.value.multiAmount, this.addForm.value.judegAmount).subscribe(val => {
      this.msg.success('试卷生成成功');
      this.isAddVisible = false;
      // this.refresh();
    }, (error) => {
        this.msg.error('试卷生成失败');
    });
  }
}
