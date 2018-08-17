import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../snippets/services/question.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-question-manage',
  templateUrl: './question-manage.component.html',
  styleUrls: ['./question-manage.component.less']
})
export class QuestionManageComponent implements OnInit {

  questions = [];
  totalAmount: number;
  page: number;
  pageSize = 10;
  addForm: FormGroup;
  editForm: FormGroup;
  isEditVisible = false;
  isAddVisible = false;
  isDeleteVisible = false;
  id: number;
  searchType: any;
  keyword = '';
  beginTime = '';
  endTime = '';

  typeFilter = [
    { text: '单选题', value: 1 },
    { text: '多选题', value: 2 },
    { text: '判断题', value: 3 }
  ];
  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.questionService.getQuestions(this.page, this.pageSize).subscribe(val => {
      this.questions = val.data;
      this.totalAmount = val.dataCount;
    });
    this.addForm = this.fb.group({
      title: [null, [Validators.required]],
      keyword: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      option: [null, [Validators.required]],
      answer: [null, [Validators.required]]
    });
    this.editForm = this.fb.group({
      title: [null, [Validators.required]],
      keyword: [null, [Validators.required]],
      option: [null, [Validators.required]],
      answer: [null, [Validators.required]]
    });
  }

  // search
  filterTypeChange(value: any): void {
    this.searchType = value;
    this.search();
  }

  pageIndexChange(event: any) {
    this.page = event;
    this.search();
  }

  refresh() {
    // this.formFresh();
    this.page = 1;
    this.searchType = '';
    this.beginTime = '';
    this.endTime = '';
    this.keyword = '';
    this.id = null;
    this.questionService.getQuestions(this.page, this.pageSize).subscribe(
      val => {
        this.questions = val.data;
        this.totalAmount = val.dataCount;
      }
    );
  }

  search() {
    // tslint:disable-next-line:max-line-length
    this.questionService.getQuestions(this.page, this.pageSize, this.searchType, this.beginTime, this.endTime, this.keyword).subscribe(val => {
      this.questions = val.data;
      this.totalAmount = val.dataCount;
    });
  }
  addQuestion() {
    if (!this.addForm.value.title) {
      this.msg.warning('题干不能为空');
      return;
    }
    if (!this.addForm.value.keyword) {
      this.msg.warning('关键词不能为空');
      return;
    }
    if (!this.addForm.value.typeId) {
      this.msg.warning('请选择类型');
      return;
    }
    if (!this.addForm.value.option) {
      this.msg.warning('选项不能为空');
      return;
    }
    if (!this.addForm.value.answer) {
      this.msg.warning('答案不能为空');
      return;
    }
    // tslint:disable-next-line:max-line-length
    this.questionService.addQuestion(this.addForm.value.title, this.addForm.value.keyword, this.addForm.value.typeId, this.addForm.value.option, this.addForm.value.answer).subscribe(val => {
      this.msg.success('增加试题成功');
      this.isAddVisible = false;
      // this.refresh();
    }, (error) => {
      this.msg.error('增加试题失败');
    });

  }
  editQuestion() {
    if (!this.editForm.value.title) {
      this.msg.warning('题干不能为空');
      return;
    }
    if (!this.editForm.value.keyword) {
      this.msg.warning('关键词不能为空');
      return;
    }
    if (!this.editForm.value.option) {
      this.msg.warning('选项不能为空');
      return;
    }
    if (!this.editForm.value.answer) {
      this.msg.warning('答案不能为空');
      return;
    }
    // tslint:disable-next-line:max-line-length
    this.questionService.editQuestion(this.id, this.editForm.value.title, this.editForm.value.keyword, this.editForm.value.option, this.editForm.value.answer).subscribe(val => {
      this.msg.success('试题修改成功');
      this.isEditVisible = false;
      // this.refresh();
    }, (error) => {
      this.msg.error('试题修改失败');
    });
  }
  deleteQuestion() {
    this.questionService.deleteQuestion(this.id).subscribe(val => {
      this.msg.success('删除成功');
      this.isDeleteVisible = false;
    }, (error) => {
      this.msg.error('删除失败');
    });
  }

  showAddModal() {
    this.isAddVisible = true;
  }
  showEditModal(data: any) {
    this.isEditVisible = true;
    this.id = data.id;
    this.editForm.setValue({
      title: data.title,
      keyword: data.keyword,
      option: data.option,
      answer: data.answer
    });
  }
  showDeleteModal(id: any) {
    this.isDeleteVisible = true;
    this.id = id;
  }
  // 对话框通用
  handleOk(): void {
    this.isEditVisible = false;
    this.isAddVisible = false;
    this.isDeleteVisible = false;
  }

  handleCancel(): void {
    this.isEditVisible = false;
    this.isAddVisible = false;
    this.isDeleteVisible = false;
    this.id = null;
  }
}
