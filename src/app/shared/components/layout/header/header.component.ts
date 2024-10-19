import { Component } from '@angular/core';
import { InfoBannerComponent } from '../info-banner/info-banner.component';
import { MobileToggleButtonComponent } from '../mobile-toggle-button/mobile-toggle-button.component';
import { LogoComponent } from '../logo/logo.component';
import { CartInfoComponent } from '../cart-info/cart-info.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'core-header',
  standalone: true,
  imports: [
    MobileToggleButtonComponent,
    LogoComponent,
    CartInfoComponent,
    SharedModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
