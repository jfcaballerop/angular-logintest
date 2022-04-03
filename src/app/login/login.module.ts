import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginpageComponent
  ]

})
export class LoginModule { }
