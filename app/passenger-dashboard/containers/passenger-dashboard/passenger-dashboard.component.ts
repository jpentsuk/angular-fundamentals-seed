import { Component, OnInit} from "@angular/core";

import {Passenger} from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers">
        
      </passenger-count>
      
      
      <div *ngFor="let passenger of passengers">
        {{passenger.fullname}}
      </div>
      
      
      
<!--      we are property bind passenger detail into child component-->
      <passenger-detail *ngFor="let passenger of passengers;" 
                        [detail] = "passenger"
                        (edit) = "handleEdit($event)"
                        (remove)= "handleRemove($event)"
      >
        
      </passenger-detail>
      
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{

  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {

  }

  ngOnInit() {
    //console.log("NgOnInit");
    this.passengerService.getPassenger()
      .subscribe((data: Passenger[]) => {
        console.log(data);
        this.passengers = data;
      });
    ;

    // generally main component is called as a container and it sits in the container folder
    // its children are so-called stateless components and sit in components folder

  }
  handleRemove(event: Passenger) {

    this.passengerService.removePassenger(event)
      .subscribe((data: Passenger) => {
        // filter returns array that does not consist those objects that does meet the condition
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });

  }

  handleEdit(event: Passenger) {

    this.passengerService.updatePassenger(event)
      .subscribe((data: Passenger) => {

        // map returns array that checks every object in the array
        this.passengers = this.passengers.map((passenger: Passenger)=> {
          if (passenger.id === event.id) {
            // object will assigned, old state passenger and new state event
            passenger = Object.assign({}, passenger, event);
          }

          return passenger;
        })
      });




  }


}
