import { Component, Input} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {Baggage} from "../../models/baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      
        {{detail | json}}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          [ngModel] = "detail?.fullname"
        >

        <div>
        Passenger ID:
          <input
            type="number"
            name="id"
            [ngModel] = "detail?.id"
          >
        </div>
        
        <div>
          

          <label>
            <input
              type="checkbox"
              name="checkedIn"
              [ngModel] = "detail?.checkedIn"
              (ngModelChange)="toggleCheckIn($event)"
            >
            Yes
          </label>
        </div>
        
        <div *ngIf="form.value.checkedIn">
          Check in date:
          <input
            type="number"
            name="checkedInDate"
            [ngModel]="detail?.checkedInDate"
          >
        </div>
        
        <div>
            Luggage:
          <select
            name="baggage"
            [ngModel]="detail?.baggage"
          >
            
<!--            We can also use [ngValue] instead of [value] and [selected], but the last one has better readability-->
            <option
              *ngFor="let item of baggage"
              [value]="item.key"
              [selected]="item.key === detail?.baggage"
            >
              {{item.value}}
              
            </option>
            
          </select>
        </div>
        
        
        
        
        <div>
          
        </div>
      </div>
      {{form.value | json}}
    </form>
    
  `
})

export class PassengerFormComponent {

  constructor() {

  }

  baggage: Baggage[] = [{
    key: "none",
    value: "No baggage"
  },
    {
      key: "hand-only",
      value: "Hand baggage"
    },
    {
      key: "hold-only",
      value: "Hold baggage"
    },
    {
      key: "hand-hold",
      value: "Hand and hold baggage"
    }
  ];

  @Input()
  detail: Passenger;

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now(); // ms
    }
  }
}
