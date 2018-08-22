import { Component, OnInit } from '@angular/core';
import { UserService } from '../../snippets/services/user.service';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  users = [];
  page: number;
  pageSize = 10;
  totalAmount: number;
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
  isEditPasswordVisible = false;
  confirmModal: NzModalRef;
  addForm: FormGroup;
  editForm: FormGroup;
  passwordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
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
        this.users = val.data;
        this.loading = false;
        this.totalAmount = val.dataCount;
      }
    );
    this.addForm = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      roleId: [null, [Validators.required]]
    });
    this.editForm = this.fb.group({
      name: [null, [Validators.required]],
      roleId: [null, [Validators.required]]
    });
    this.passwordForm = this.fb.group({
      password: [null, [Validators.required]]
    });
  }

  filterRoleChange(value: any): void {
    this.searchRole = value;
    this.search();
  }

  pageIndexChange(event: any) {
    this.page = event;
    this.search();
  }

  search() {
    this.loading = true;
    this.userService.getUsers(this.page, this.pageSize, this.searchRole, this.beginTime, this.endTime, this.keyword)
      .subscribe(val => {
        this.users = val.data;
        this.totalAmount = val.dataCount;
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
        this.users = val.data;
        this.totalAmount = val.dataCount;
        this.loading = false;
      }
    );
  }

  // 功能
  addUser() {
    if (!this.addForm.value.username) {
      this.msg.warning('登录名不能为空');
      return;
    }
    if (!this.addForm.value.name) {
      this.msg.warning('姓名不能为空');
      return;
    }
    if (!this.addForm.value.roleId) {
      this.msg.warning('请选择角色');
      return;
    }
    this.userService.addUser(this.addForm.value.username, this.addForm.value.name, this.addForm.value.roleId)
    .subscribe(val => {
      this.msg.success('增加成功');
      this.isAddVisible = false;
      this.refresh();
    }, (error) => {
      this.msg.error('增加失败');
    });
  }
  editUser() {
    if (!this.editForm.value.name) {
      this.msg.warning('姓名不能为空');
      return;
    }
    if (!this.editForm.value.roleId) {
      this.msg.warning('请选择角色');
      return;
    }
    this.userService.editUser(this.id, this.editForm.value.name, this.editForm.value.roleId).subscribe(val => {
      this.msg.success('修改成功');
      this.isEditVisible = false;
      this.refresh();
    }, (error) => {
      this.msg.error('修改失败');
    });
  }
  editUserPassword() {
    if (!this.passwordForm.value.password) {
      this.msg.error('新密码不能为空');
      return;
    }
    this.userService.editUserPassword(this.id, this.passwordForm.value.password).subscribe(val => {
      this.msg.success('修改成功');
      this.isEditPasswordVisible = false;
      this.refresh();
    }, (error) => {
      this.msg.error('修改失败');
    });
  }
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
  showEditPasswordModal(id: number) {
    this.id = id;
    this.isEditPasswordVisible = true;
  }
  showEditModal(data) {
    this.id = data.id;
    this.isEditVisible = true;

    this.editForm.setValue({
      name: data.name || null,
      username: data.username || null,
      roleId: data.role.id || null,
    });
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
    this.isEditPasswordVisible = false;
  }

  handleCancel(): void {
    this.isEditVisible = false;
    this.isAddVisible = false;
    this.isEditPasswordVisible = false;
    this.isDeleteVisible = false;
  }

}
