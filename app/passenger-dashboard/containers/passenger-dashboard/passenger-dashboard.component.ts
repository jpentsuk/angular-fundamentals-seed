import { Component, OnInit} from "@angular/core";

import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers">
        
      </passenger-count>
      
      <passenger-detail *ngFor="let passenger of passengers;" [detail] = passenger>
        
      </passenger-detail>
      
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{

  passengers: Passenger[];
  constructor() {

  }

  ngOnInit() {
    console.log("NgOnInit");
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


}
