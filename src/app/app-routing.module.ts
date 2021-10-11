import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@core';

const routes: Routes = [
  {
    path: ROUTES.dashboard,
    loadChildren: () => import('./components/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: ROUTES.dashboard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
