import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

