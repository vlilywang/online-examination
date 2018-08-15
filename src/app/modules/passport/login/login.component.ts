import { Component, OnInit } from '@angular/core';
// import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Rx.Observable.interval( 1000 )
    // .debounceTime( 500 )
    // .subscribe(x => console.log( x ));
  }


}
