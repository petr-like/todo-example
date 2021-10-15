import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { RaisedButtonComponent } from './raised-button.component';

@NgModule({
  declarations: [RaisedButtonComponent],
  imports: [MatButtonModule],
  exports: [RaisedButtonComponent],
})
export class RaisedButtonModule {}
