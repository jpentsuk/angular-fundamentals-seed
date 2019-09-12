import { Component, Input, Output, EventEmitter} from "@angular/core";
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
       <div class="children">
         Children: {{detail.children?.length || 0}}
       </div>
       <button (click)="toggleEdit()">
         {{editing ? 'Done' : 'Edit'}}
       </button>
        
       <button (click)="onRemove()">
         Remove
       </button>
     </div>
  `
})
export class PassengerDetailComponent{

  // input means data coming from parent component
  @Input()
  detail: Passenger;
  editing: boolean = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();


  @Output()
  edit: EventEmitter<any> = new EventEmitter();





  constructor() {

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
}

