import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { DashboardRouterModule } from './dashboard.routers';

import { CheckboxModule, FormFieldModule, InputModule } from '@shared/form-controls';
import { ButtonsModule } from '@shared/buttons';

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
    CheckboxModule,
    ButtonsModule,
    InputModule,
    FormFieldModule,
    MatDialogModule,
  ],
})
export class DashboardModule { }
