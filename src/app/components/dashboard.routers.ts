import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@core';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: ROUTES.empty,
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule { }
