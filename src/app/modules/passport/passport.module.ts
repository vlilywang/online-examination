import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PassportComponent } from './passport/passport.component';
import { PassportRoutingModule } from './passport-routing.module';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    CommonModule,
    PassportRoutingModule
  ],
  declarations: [...COMPONENT_NOROUNT, LoginComponent, PassportComponent]
})
export class PassportModule { }
