import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';

@Component({
  selector: 'core-layout',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent, InfoBannerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  infoBannerMessage = 'Get free delivery on orders over $100';
}
