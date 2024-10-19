import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'core-mobile-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './mobile-toggle-button.component.html',
})
export class MobileToggleButtonComponent {
  @Output() toggleEvent = new EventEmitter();

  toggle() {
    this.toggleEvent.emit();
  }
}
