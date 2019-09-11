// we need Input decorator to tell Angular we are getting data from parent called Passenger-Dashboard and bind it here in child component



import { Component, Input} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";


@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3>Airline Passengers!</h3>
      <div>
        Total checked in: : {{checkedInCount()}}/{{items.length}}
      </div>
    </div>
    
  `
})
export class PassengerCountComponent{

  @Input()
  items: Passenger[];


  // this returns number of passengers that are checked in
  checkedInCount(): number {
    if (!this.items) return;
    // return this.items.filter((passenger: Passenger) => {
    //   return passenger.checkedIn;
    // }).length;

    // one line arrow function
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

}

