import { Component, OnInit } from '@angular/core';
import { UserService } from '../../snippets/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  users = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe(
    //   val => {
    //     this.users = val.data.content;
    //     console.log(this.users);
    //   }
    // );
  }

}
