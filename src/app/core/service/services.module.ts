import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        AuthGuard,
        AuthService
       ]
})
export class ServicesModule {}
