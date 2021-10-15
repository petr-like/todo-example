import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IconButtonComponent } from '@shared/buttons/icon-button/icon-button.component';

@NgModule({
  declarations: [
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    IconButtonComponent,
  ],
})
export class IconButtonModule {}
