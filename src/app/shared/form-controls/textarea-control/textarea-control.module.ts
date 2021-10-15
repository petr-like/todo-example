import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TextareaControlComponent } from './textarea-control.component';

@NgModule({
  declarations: [
    TextareaControlComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TextareaControlComponent,
  ]
})
export class TextareaControlModule { }
