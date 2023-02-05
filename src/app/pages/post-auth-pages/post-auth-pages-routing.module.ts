import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/routes';
import { SuperviserComponent } from './superviser/superviser.component';

const routes: Routes = [
  {
    path:APP_ROUTES.supervisor,
    component:SuperviserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthPagesRoutingModule { }
