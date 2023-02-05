import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/routes';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: APP_ROUTES.login,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreAuthPagesRoutingModule { }
