import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'core-info-banner',
  standalone: true,
  imports: [],
  templateUrl: './info-banner.component.html',
})
export class InfoBannerComponent {
  @Input({ required: true }) infoMessage = '';
}
