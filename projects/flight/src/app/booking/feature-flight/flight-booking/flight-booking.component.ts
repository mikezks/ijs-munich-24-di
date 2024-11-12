import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../../shared/ui-common';
import { provideNavigationConfig, provideNavigationService } from '../../../shared/logic-navigation';
import { NavigationProviderDirective } from '../../../shared/ui-common/navigation/navigation-provider.directive';


@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    NavigationProviderDirective
  ],
  providers: [
    provideNavigationService([
      {
        route: 'flight/search',
        label: 'Flight Search',
        icon: 'flight'
      }
    ])
  ],
  template: `
    <div>
      <app-navigation class="nav-standalone" />
      <app-navigation [navConfig]="navState" class="nav-standalone" />
      <router-outlet></router-outlet>
    </div>
  `
})
export class FlightBookingComponent {
  navState = [{
    route: 'flight/departures',
    label: 'Departures',
    icon: 'departures'
  }];
}
