import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";


@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
     <div>
       <span class="status" [class.checked-in]="detail.checkedIn">
        
       </span>
       <div *ngIf="editing">
         <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
       </div>
       <div *ngIf="!editing">
         {{detail.fullname}}
       </div>
       <div>
         Check in date: {{detail.checkedInDate ? (detail.checkedInDate| date: 'yMMMMd' | uppercase): 'Not checked in'}}
       </div>
       
       <button (click)="toggleEdit()">
         {{editing ? 'Done' : 'Edit'}}
       </button>
        
       <button (click)="onRemove()">
         Remove
       </button>
       
       <button (click)="goToPassenger()">
         View
       </button>
     </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit{

  // input means data coming from parent component
  @Input()
  detail: Passenger;
  editing: boolean = false;

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();


  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();





  constructor() {

  }

  // since this ngOnChanges is called before than NgOnInit, we can reassign data here, so when editing current object, parent object
  // (name list above) will not change during editing and updates it after "Done" button is clicked
  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log("ngChanges");
  }

  ngOnInit() {
    console.log("NgInit");
  }

  onNameChange(value: string) {
    // console.log("Value" , value);
     this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;

  }

  // need to pass data to parent, since we have to remove particular passenger from passenger array
  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}

