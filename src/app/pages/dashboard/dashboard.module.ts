import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { DashboardRouterModule } from './dashboard.routers';

import { FormControlsModule, ButtonsModule } from '@shared/index';

// Components
import { DashboardComponent } from './dashboard.component';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './modals/task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouterModule,
    ReactiveFormsModule,
    FormControlsModule,
    ButtonsModule,
    MatDialogModule,
  ],
})
export class DashboardModule { }
