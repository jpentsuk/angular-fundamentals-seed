import { Component, OnInit} from "@angular/core";

import {Passenger} from "../../models/passenger.interface";

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
  constructor() {

  }

  ngOnInit() {
    //console.log("NgOnInit");
    this.passengers  = [{
      id: 1,
      fullname: 'Jan',
      checkedIn: true,
      checkedInDate: 14884128000000,
      children: null
    },
      {
        id: 2,
        fullname: 'Mati',
        checkedIn: false,
        checkedInDate: null,
        children: [{name: 'Ted', age: 12}, {name: 'Eva', age: 15}]


      },
      {
        id: 3,
        fullname: 'Toomas',
        checkedIn: true,
        checkedInDate: 14884128000000,
        children: [{name: 'Axel', age: 22}, {name: 'Tom', age: 5}]


      },
      {
        id: 4,
        fullname: 'Marko',
        checkedIn: true,
        checkedInDate: 14884128000000,
        children: null


      },
      {
        id: 5,
        fullname: 'Neeme',
        checkedIn: false,
        checkedInDate: null,
        children: null
      }

    ];

    // generally main component is called as a container and it sits in the container folder
    // its children are so-called stateless components and sit in components folder

  }
  handleRemove(event: Passenger) {
    // filter returns array that does not consist those objects that does meet the condition
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    // map returns array that checks every object in the array
    this.passengers = this.passengers.map((passenger: Passenger)=> {
      if (passenger.id === event.id) {
        // object will assigned, old state passenger and new state event
        passenger = Object.assign({}, passenger, event);
      }

      return passenger;
    })

  }


}
