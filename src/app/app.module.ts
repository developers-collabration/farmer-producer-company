import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostauthLayoutComponent } from './layouts/postauth-layout/postauth-layout.component';
import { PreauthLayoutComponent } from './layouts/preauth-layout/preauth-layout.component';
import { FooterComponent } from './layouts/postauth-layout/footer/footer.component';
import { NavbarComponent } from './layouts/postauth-layout/navbar/navbar.component';
import { SidebarComponent } from './layouts/postauth-layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layouts/postauth-layout/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostauthLayoutComponent,
    PreauthLayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
