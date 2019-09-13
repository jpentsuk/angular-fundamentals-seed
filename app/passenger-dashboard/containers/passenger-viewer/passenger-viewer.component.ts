import {Component, OnInit} from "@angular/core";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Passenger} from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form
        [detail] = "passenger"
        (update)="onUpdatePassenger($event)"
      >
        
      </passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit{

  passenger: Passenger;


  constructor(private passengerService: PassengerDashboardService,
              private router: Router,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit() {

    // this function returns us the actual id from the url
    this.route.params.subscribe((data: Params) => {
      console.log(data);
    });

    this.passengerService.getPassenger(1).
      subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);

          return this.passenger;
        });
  }

}
