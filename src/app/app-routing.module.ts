import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@core';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: ROUTES.empty,
    component: HomeComponent,
  },
  {
    path: ROUTES.dashboard,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
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
