import { Component, OnInit } from '@angular/core';
import { ExampaperService } from '../../snippets/services/exampaper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

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
    private msg: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = 1;
    this.exampaperService.getExampapers(this.page, this.pageSize).subscribe(val => {
      this.exampapers = val.data;
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

  deleteExampaper(exampaper: any) {
    this.exampaperService.deleteExampaper(exampaper.id).subscribe(val => {
      this.msg.success('删除成功');
      this.isDeleteVisible = false;
      // this.refresh();
    }, (error) => {
      this.msg.error('删除失败');
    });

  }
  // 对话框
  showAddModal() {
    this.isAddVisible = true;
  }
  showDeleteModal() {
    this.isDeleteVisible = true;
  }
  // 对话框通用
  handleOk(): void {
    this.isAddVisible = false;
    this.isDeleteVisible = false;
  }

  handleCancel(): void {
    this.isAddVisible = false;
    this.isDeleteVisible = false;
  }
  gotoDetail(id: number) {
    this.router.navigateByUrl(`/app/exampaper-detail/${id}`);
  }
  gotoGradDetail(id: number) {
    this.router.navigateByUrl(`/app/exam-detail/${id}`);
  }
}
