import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaisedButtonModule } from '@shared/buttons/raised-button/raised-button.module';
import { IconButtonModule } from '@shared/buttons/icon-button/icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    RaisedButtonModule,
    IconButtonModule,
  ],
  exports: [
    RaisedButtonModule,
    IconButtonModule,
  ],
})
export class ButtonsModule { }
