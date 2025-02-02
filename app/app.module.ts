import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

