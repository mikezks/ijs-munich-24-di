import { Routes } from '@angular/router';
import { DepatureComponent, ScanTicketComponent } from './feature-departure';
import { provideNavigationConfig } from '../shared/logic-navigation';
import { BOARDING_NAVIGATION } from './boarding.navigation';

export const BOARDING_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideNavigationConfig(BOARDING_NAVIGATION)
    ],
    children: [
      {
        path: '',
        redirectTo: 'departures',
        pathMatch: 'full'
      },
      {
        path: 'departures',
        component: DepatureComponent
      },
      {
        path: 'scan-ticket',
        component: ScanTicketComponent
      }
    ]
  }
];

export default BOARDING_ROUTES;
