import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";



// containers
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";


// components
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

// services
import {PassengerDashboardService} from "./passenger-dashboard.service";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";
import {PassengerFormComponent} from "./components/passenger-form/passenger-form.component";


@NgModule({
  declarations: [
    // containers
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // components
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent


  ],
  exports: [
    PassengerViewerComponent
  ],
  imports: [CommonModule, HttpModule, FormsModule
  ],
  providers:  [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
