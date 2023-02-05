import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthPagesRoutingModule } from './post-auth-pages-routing.module';
import { SuperviserComponent } from './superviser/superviser.component';


@NgModule({
  declarations: [
    SuperviserComponent
  ],
  imports: [
    CommonModule,
    PostAuthPagesRoutingModule
  ]
})
export class PostAuthPagesModule { }
