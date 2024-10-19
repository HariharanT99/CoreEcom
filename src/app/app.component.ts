import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SideNavComponent } from './shared/components/layout/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CoreEcom';
}
