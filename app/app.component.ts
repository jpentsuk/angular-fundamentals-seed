import { Component} from "@angular/core";

interface Nav {
  link: string,
  name: string,
  exact: boolean
}


// date can either be number or null, so those are identical:

// interface Passenger {
//   id: number,
//   fullname: string,
//   checkedIn: boolean,
//   checkedInDate: number | null
//
// }
// interface Child {
//   name: string,
//   age: number
// }
//
//
// interface Passenger {
//   id: number,
//   fullname: string,
//   checkedIn: boolean,
//   checkedInDate?: number,
//   children: Child[] | null
// }



@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

    <!--    property binding-->
<!--    <div class="app">-->
<!--      {{title + '!'}}-->
<!--    </div>-->
<!--    <h1 [innerHTML]="title"></h1>-->
<!--    <div>-->
<!--      {{numberOne + numberTwo}}-->

<!--    </div>-->
<!--    <div>-->
<!--      {{isHappy ? ':)' : ':('}}-->
<!--    </div>-->

<!--    <img [src]="logo">-->

<!--    &lt;!&ndash;    one way databinding&ndash;&gt;-->
<!--    <input type="text" [value]="name">-->
<!--    <div>-->
<!--      {{name}}-->
<!--    </div>-->


<!--    &lt;!&ndash;    event binding&ndash;&gt;-->
<!--    <hr>-->
<!--    <hr>-->
<!--    <br>-->
<!--    <br>-->

<!--    <div class="app">-->

<!--      &lt;!&ndash;      blur - if user inputs something and clicks somewhere else, then name is changing&ndash;&gt;-->
<!--      &lt;!&ndash;      input - if user inputs something, then name is changing every time something is typed. Its actually still one way databind with event being emitted&ndash;&gt;-->
<!--      <input-->
<!--        type="text"-->
<!--        [value]="name"-->
<!--        (input) = "handleInput($event)"-->
<!--        (blur)="handleBlur($event)"-->
<!--      >-->
<!--    </div>-->
<!--    <div>-->
<!--      {{name}}-->
<!--    </div>-->

<!--    &lt;!&ndash;1 way databind with click event&ndash;&gt;-->
<!--    <button-->
<!--      (click)="handleClick()"-->
<!--    >Change name</button>-->
<!--    -->
<!--&lt;!&ndash;    2 way databinding&ndash;&gt;-->
<!--&lt;!&ndash;    We need FormsModule for get that working&ndash;&gt;-->

<!--    <hr>-->
<!--    <hr>-->
<!--    <br>-->
<!--    <br>-->
<!--    -->
<!--    -->
<!--&lt;!&ndash;    ngModel - property binding&ndash;&gt;-->
<!--&lt;!&ndash;    ngModelChange - event binding&ndash;&gt;-->
<!--    <input-->
<!--      type="text"-->
<!--      [ngModel]="name"-->
<!--      (ngModelChange)="handleChange($event)"-->
<!--    >-->
<!--    <div>-->
<!--      still 1  way databinding with ng-model -&#45;&#45; {{name}}-->
<!--    </div>-->

<!--    <br>-->
<!--    <br>-->
<!--    <br>-->

<!--    <input-->
<!--      type="text"-->
<!--      [(ngModel)]="name"-->
<!--    >-->
<!--    <div>-->
<!--      2 way databinding -&#45;&#45; {{name}}-->
<!--    </div>-->

<!--    <hr>-->
<!--    <hr>-->
<!--    <br>-->
<!--    <br>-->
<!--    -->
<!--&lt;!&ndash;    template ref variables&ndash;&gt;-->
<!--    gives access to certain DOM element-->
<!--    <div class="app">-->
<!--      <button (click)="handleClickTemplate(username.value)">Get value</button>-->
<!--      <input-->
<!--        type="text" #username>-->
<!--      <div>-->
<!--        {{name}}-->
<!--      </div>-->
<!--    </div>-->
    
<!--    end of template fundamentals-->

<!--    <hr><hr>-->
<!--    NgIf-->
<!--    <div class="app">-->
<!--      <input-->
<!--        type="text"-->
<!--        [value]="name"-->
<!--        (input)="handleChange($event)"-->
<!--      >-->
<!--      <div *ngIf="name.length > 2">-->
<!--        Searching for ... {{name}}-->
<!--      </div>-->
<!--    </div>-->
<!--    <br><br>-->
    
<!--    asterisk means its shadow DOM element, so-->
<!--    actually the above code is same as:-->
    
<!--    <div class="app">-->
<!--      <input-->
<!--      type="text"-->
<!--      [value]="name"-->
<!--      (input)="handleChange($event)">-->
<!--    </div>-->
<!--    <template [ngIf]="name.length > 2">-->
<!--      <div>-->
<!--        Searching for ... {{name}}-->
<!--      </div>-->
<!--    </template>-->
    
<!--
    end of ngIf
-->

<!--    <br><br>-->
<!--    -->
<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">{{i}}: {{passenger.fullname}}</li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    -->
<!--    <br><br>-->

<!--    asterisk means its shadow DOM element, so-->
    <!--    actually the above code is same as:-->
    
<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <template ngFor let-passenger let-i="index" [ngForOf]="passengers">-->
<!--        <ul>-->
<!--          <li>{{i}}: {{passenger.fullname}}</li>-->
<!--        </ul>-->
<!--      </template>-->
<!--    </div>-->

<!--    end of ngFor-->


<!--    <br><br>-->

<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">-->
<!--          <span class="status"-->
<!--            [class.checked-in]="passenger.checkedIn"-->
<!--          >-->
<!--            -->
<!--          </span>-->
<!--          {{i}}: {{passenger.fullname}}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->

<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">-->
<!--          <span class="status"-->
<!--                [ngClass]="{'checked-in': passenger.checkedIn,-->
<!--                'checked-out': !passenger.checkedIn-->
<!--                }"-->
<!--          >-->
<!--            -->
<!--          </span>-->
<!--          {{i}}: {{passenger.fullname}}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->


    
<!--    ngStyle beginning-->



<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">-->
<!--          <span class="status"-->
<!--                [style.backgroundColor]="passenger.checkedIn ? 'green' : 'red'"-->
<!--          >-->
<!--            -->
<!--          </span>-->
<!--          {{i}}: {{passenger.fullname}}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->

<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">-->
<!--          <span class="status"-->
<!--                [ngStyle]="{backgroundColor: passenger.checkedIn ? 'green' : 'red'}"-->
<!--          >-->
<!--            -->
<!--          </span>-->
<!--          {{i}}: {{passenger.fullname}}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    
<!--    end of ngStyle-->




<!--        Pipes-->
<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">-->
<!--          <span class="status"-->
<!--                [ngStyle]="{backgroundColor: passenger.checkedIn ? 'green' : 'red'}"-->
<!--          >-->
<!--            -->
<!--          </span>-->
<!--          {{i}}: {{passenger.fullname}}-->
<!--          <p>{{passenger | json}}</p>-->
<!--          <div>-->
<!--            Check in date: {{passenger.checkedInDate ? (passenger.checkedInDate| date: 'yMMMMd' | uppercase): 'Not checked in'}}-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->




    
<!--     safe navigation - use question mark, when object property could be null-->
<!--    <div class="app">-->
<!--      <h3>Airline Passengers</h3>-->
<!--      <ul>-->
<!--        <li *ngFor="let passenger of passengers, let i = index;">-->
<!--          <span class="status"-->
<!--                [ngStyle]="{backgroundColor: passenger.checkedIn ? 'green' : 'red'}"-->
<!--          >-->
<!--            -->
<!--          </span>-->
<!--          {{i}}: {{passenger.fullname}}-->
<!--          <p>{{passenger | json}}</p>-->
<!--          <div>-->
<!--            Check in date: {{passenger.checkedInDate ? (passenger.checkedInDate| date: 'yMMMMd' | uppercase): 'Not checked in'}}-->
<!--          </div>-->
<!--          <div class="children">-->
<!--            Children: {{passenger.children?.length || 0}}-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    
    
    
    
<!--    Communication between smart component(tied to service) and its child component:-->
<!--    -->
<!--    Data flows down-->
<!--    Events emit up-->
    
    


    <div>
      
      <nav class="nav">
        
     
      <a
      *ngFor="let item of nav"  
      [routerLink]="item.link"
      routerLinkActive="active"
      [routerLinkActiveOptions]= "{exact: item.exact}"
      >
      
      {{item.name}}
      </a>
        
      <router-outlet>
      
      </router-outlet>

      </nav>

    </div>





  `
})



export class AppComponent {
  // title: string;
  // numberOne: number = 1;
  // numberTwo: number = 2;
  // isHappy: boolean = false;
  // logo: string = 'img/angle-down.svg';
  // name: string = "";
  //
  // constructor() {
  //   this.title = "Ultimate angular"
  // }
  //
  // handleBlur(event: any) {
  //   this.name = event.target.value;
  //   console.log(event);
  // }
  //
  // handleInput(event: any) {
  //   this.name = event.target.value;
  // }
  //
  // handleClick() {
  //
  //   this.name = 'Pentshuk';
  // }
  //
  // handleClickTemplate(value: string) {
  //   console.log(value);
  // }
  // handleChange(value: string) {
  //   this.name = value;
  // }

  // end of template fundamentals



  // name: string = '';
  // handleChange(event: any) {
  //   this.name = event.target.value;
  // }

  // end of if

  // passengers: Passenger[] = [{
  //   id: 1,
  //   fullname: 'Jan',
  //   checkedIn: true,
  //   checkedInDate: 14884128000000,
  //   children: null
  // },
  //   {
  //     id: 2,
  //     fullname: 'Mati',
  //     checkedIn: false,
  //     checkedInDate: null,
  //     children: [{name: 'Ted', age: 12}, {name: 'Eva', age: 15}]
  //
  //
  //   },
  //   {
  //     id: 3,
  //     fullname: 'Toomas',
  //     checkedIn: true,
  //     checkedInDate: 14884128000000,
  //     children: [{name: 'Axel', age: 22}, {name: 'Tom', age: 5}]
  //
  //
  //   },
  //   {
  //     id: 4,
  //     fullname: 'Marko',
  //     checkedIn: true,
  //     checkedInDate: 14884128000000,
  //     children: null
  //
  //
  //   },
  //   {
  //     id: 5,
  //     fullname: 'Neeme',
  //     checkedIn: false,
  //     checkedInDate: null,
  //     children: null
  //   }
  //
  // ];

  nav : Nav[] = [
    {
      link: '/',
      name: "Home",
      exact: true
    },
    {
      link: '/oops',
      name: "404",
      exact: false
    },
    {
      link: '/passengers',
      name: "Passengers",
      exact: true
    }
  ];



}
