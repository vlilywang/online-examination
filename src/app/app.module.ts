import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from 'src/app/core/service/services.module';
import { CommonModule } from '@angular/common';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // NgZorroAntdModule,
    AppRoutingModule,
    ServicesModule,
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    {
      provide: 'BASE_CONFIG',
      useValue: {
          urm: 'http://localhost:8000',
          server: '/api'
      }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
