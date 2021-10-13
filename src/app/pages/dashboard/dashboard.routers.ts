import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Consts
import { ROUTES } from '@core';

// Components
import { DashboardComponent } from './dashboard.component';

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
