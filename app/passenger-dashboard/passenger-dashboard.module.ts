import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";


// containers
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";


// components
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

// services
import {PassengerDashboardService} from "./passenger-dashboard.service";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";


@NgModule({
  declarations: [PassengerDashboardComponent,
    PassengerViewerComponent,
    // components
    PassengerCountComponent,
    PassengerDetailComponent,


  ],
  exports: [
    PassengerViewerComponent
  ],
  imports: [CommonModule, HttpModule
  ],
  providers:  [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
