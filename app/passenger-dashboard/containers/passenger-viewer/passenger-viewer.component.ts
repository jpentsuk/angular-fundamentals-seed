import {Component, OnInit} from "@angular/core";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Passenger} from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      
      <button (click)="goBack()">
        &lsaquo;Go back
      </button>
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
    // and switchMap is putting together to subscribes
    this.route.params.switchMap((data: Passenger) => {
      return this.passengerService.getPassenger(data.id)
    })
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);

          return this.passenger;
        });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }

}
