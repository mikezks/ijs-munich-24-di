import { Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { TicketEffects } from "./logic-flight/+state/effects";
import { ticketFeature } from "./logic-flight/+state/reducer";
import { FlightSearchComponent, FlightEditComponent, FlightBookingComponent } from "./feature-flight";
import { flightsResolverConfig } from "./logic-flight/data-access/flight.resolver";
import { MyFlightsComponent } from "./feature-flight/my-flights/my-flights.component";
import { provideNavigationConfig } from "../shared/logic-navigation";
import { BOOKING_NAVIGATION } from "./booking.navigation";
import { DepatureComponent } from "../boarding/feature-departure";


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideNavigationConfig(BOOKING_NAVIGATION),
      provideState(ticketFeature),
      provideEffects([TicketEffects]),
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        children: [
          {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
          },
          {
            path: 'search',
            component: FlightSearchComponent,
          },
          {
            path: 'edit/:id',
            component: FlightEditComponent,
            resolve: flightsResolverConfig
          },
          {
            path: 'departures',
            component: DepatureComponent
          }
        ]
      },
      {
        path: 'my-flights',
        component: MyFlightsComponent,
      }
    ]
  }
];

export default BOOKING_ROUTES;
