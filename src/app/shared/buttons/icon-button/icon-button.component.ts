import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  @Input() iconName: string = 'home';
  @Input() ariaLabel: string = '';
  @Input() color: 'basic' | 'primary' | 'accent' | 'warn' = 'basic'

  constructor() { }
}
