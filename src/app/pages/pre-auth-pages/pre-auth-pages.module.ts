import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthPagesRoutingModule } from './pre-auth-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
 
  ],
  imports: [
    CommonModule,
    PreAuthPagesRoutingModule,
    SharedModule
  ]
})
export class PreAuthPagesModule { }
