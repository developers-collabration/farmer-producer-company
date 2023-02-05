import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthPagesRoutingModule } from './pre-auth-pages-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PreAuthPagesRoutingModule
  ]
})
export class PreAuthPagesModule { }
