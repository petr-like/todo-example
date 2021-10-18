import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  constructor(private cd: ChangeDetectorRef) {}

  get currentDate() {
    return new Date();
  }
}
