import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardRouterModule } from './dashboard.routers';
import { MaterialModule } from '@shared/material.module';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    FooterComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRouterModule
  ]
})
export class DashboardModule { }
