import { Component, OnInit } from '@angular/core';
import { UserService } from '../../snippets/services/user.service';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  users = [];
  page: number;
  pageSize = 20;
  loading = true; // bug
  beginTime: any;
  endTime: any;
  keyword: any;
  role: any;
  searchRole: any;
  id: number;
  roleFilter = [
    { text: 'TEACHER', value: 1 },
    { text: 'STUDENT', value: 2 }
  ];

  // 对话框
  isAddVisible = false;
  isEditVisible = false;
  isDeleteVisible = false;
  confirmModal: NzModalRef;

  constructor(
    private userService: UserService,
    private msg: NzMessageService,
    private modal: NzModalService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.searchRole = '';
    this.beginTime = '';
    this.endTime = '';
    this.keyword = '';
    this.userService.getUsers(this.page, this.pageSize).subscribe(
      val => {
        this.users = val.data.content;
        this.loading = false;
      }
    );
  }

  filterRoleChange(value: any): void {
    console.log('value:' + value);
    this.searchRole = value;
    this.search();
  }

  search() {
    this.loading = true;
    this.userService.getUsers(this.page, this.pageSize, this.searchRole, this.beginTime, this.endTime, this.keyword)
      .subscribe(val => {
        this.users = val.data.content;
        this.loading = false;
      });
  }
  // 刷新
  refresh() {
    // this.formFresh();
    this.page = 1;
    this.searchRole = '';
    this.beginTime = '';
    this.endTime = '';
    this.keyword = '';
    this.id = null;
    this.userService.getUsers(this.page, this.pageSize).subscribe(
      val => {
        this.users = val.data.content;
        this.loading = false;
      }
    );
  }

  // 功能
  addUser() {}
  editUser() {}
  deleteUser() {
    this.userService.deleteUser(this.id).subscribe(
      val => {
        this.msg.success('删除成功');
        this.isDeleteVisible = false;
        this.refresh();
      }, (error) => {
        this.msg.error('删除失败');
      }
    );
  }

  // 对话框
  showAddModal() {
    this.isAddVisible = true;
  }
  showEditModal() {
    this.isEditVisible = true;
  }
  showDeleteModal(id: number) {
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
  }

}
