import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '@shared/form-controls/checkbox/checkbox.module';
import { FormFieldModule } from '@shared/form-controls/form-field/form-field.module';
import { InputModule } from '@shared/form-controls/input/input.module';
import { TextareaControlModule } from '@shared/form-controls/textarea-control/textarea-control.module';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    FormFieldModule,
    InputModule,
    TextareaControlModule,
  ],
  exports: [
    CheckboxModule,
    FormFieldModule,
    InputModule,
    TextareaControlModule,
  ],
})
export class FormControlsModule {}
