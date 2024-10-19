import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MobileToggleButtonComponent } from '../mobile-toggle-button/mobile-toggle-button.component';

@Component({
  selector: 'core-side-nav',
  standalone: true,
  imports: [MobileToggleButtonComponent],
  templateUrl: './side-nav.component.html',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '16rem',
        })
      ),
      state(
        'closed',
        style({
          width: '0',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class SideNavComponent {
  isOpen = true;
  toggle() {
    console.log('toggle');
    this.isOpen = !this.isOpen;
  }
}
