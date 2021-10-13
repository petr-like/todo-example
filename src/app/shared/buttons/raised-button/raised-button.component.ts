import { Component, Input } from '@angular/core';

export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent {

  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean = false;
  @Input() color: 'basic' | 'primary' | 'accent' | 'warn' = 'basic';

  constructor() { }

}
