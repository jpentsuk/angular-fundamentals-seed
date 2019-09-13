import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {Baggage} from "../../models/baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    
<!--    we do not use the click event near the button. Since we said there button type is "submit", we can use function here-->
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      
      <div>
        
<!--        We can have access via #fullname reference to ngModel, which gives us error handling options to use-->
        
        Passenger name:
        <input
          type="text"
          name="fullname"
          [ngModel] = "detail?.fullname"
          required
          #fullname = "ngModel"
        >
        
<!--        when error then show error message, but if fullname was empty at first, then to avoid error-->
<!--        we have to use keyword "dirty"-->
        
<!--        we can also use keyword "touched". So at first error is not displayed but when user clicks input form and leaves, then the error is shown-->
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
        
        
        
<!--        we can also use "minlength = 1" or so one, and then can have access to it via errors?.minlength -->
        <div>
        Passenger ID:
          <input
            type="number"
            name="id"
            [ngModel] = "detail?.id"
            required
            #id = "ngModel"
          >
          <div *ngIf="id.errors?.required && id.dirty" class="error">
             Passenger ID is required
          </div>

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
          <button
            type="submit"
            [disabled]="form.invalid"
          >
            Update passenger
          </button>
        </div>
      </div>
      <div>
        
      </div>
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

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now(); // ms
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
