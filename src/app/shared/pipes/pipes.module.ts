import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortDatePipe } from './date.pipe';

const pipes = [
  ShortDatePipe,
]

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes]
})
export class PipesModule { }
