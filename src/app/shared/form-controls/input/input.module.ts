import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
  ]
})
export class InputModule { }
