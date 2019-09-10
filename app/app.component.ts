import { Component} from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

    <!--    property binding-->
    <div class="app">
      {{title + '!'}}
    </div>
    <h1 [innerHTML]="title"></h1>
    <div>
      {{numberOne + numberTwo}}

    </div>
    <div>
      {{isHappy ? ':)' : ':('}}
    </div>

    <img [src]="logo">

    <!--    one way databinding-->
    <input type="text" [value]="name">
    <div>
      {{name}}
    </div>


    <!--    event binding-->
    <hr>
    <hr>
    <br>
    <br>

    <div class="app">

      <!--      blur - if user inputs something and clicks somewhere else, then name is changing-->
      <!--      input - if user inputs something, then name is changing every time something is typed. Its actually still one way databind with event being emitted-->
      <input
        type="text"
        [value]="name"
        (input) = "handleInput($event)"
        (blur)="handleBlur($event)"
      >
    </div>
    <div>
      {{name}}
    </div>

    <!--1 way databind with click event-->
    <button
      (click)="handleClick()"
    >Change name</button>
  `
})

export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = false;
  logo: string = 'img/angle-down.svg';
  name: string = "Jan";

  constructor() {
    this.title = "Ultimate angular"
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Pentshuk";
  }

}
