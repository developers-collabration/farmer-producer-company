import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostauthLayoutComponent } from './layouts/postauth-layout/postauth-layout.component';
import { PreauthLayoutComponent } from './layouts/preauth-layout/preauth-layout.component';
import { APP_ROUTES, POST_AUTH_ROUTES, PRE_AUTH_ROUTES } from './shared/routes';

const routes: Routes = [
  {
    path:APP_ROUTES.root,
    redirectTo:APP_ROUTES.login,
    pathMatch:'full'
  },
  {
    path:APP_ROUTES.root,
    component:PreauthLayoutComponent,
    children:PRE_AUTH_ROUTES
  },
  {
    path:APP_ROUTES.root,
    component:PostauthLayoutComponent,
    children:POST_AUTH_ROUTES
  },
];

const routeOptions:any={
  scrollPositionRestoration:'enabled',
  intialNavigation:'enabled',
  paramsInheritanceStrategy:'always'
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
