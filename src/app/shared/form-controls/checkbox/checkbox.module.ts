import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CheckboxComponent } from '@shared/form-controls/checkbox/checkbox.component';

@NgModule({
  declarations: [
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  exports: [
    CheckboxComponent,
  ]
})
export class CheckboxModule { }
