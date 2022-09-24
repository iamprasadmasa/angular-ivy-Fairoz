import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  obj: any = {};

  constructor() {
    this.obj = { name: 'fairoz', age: '25', village: 'ndd', skill: 'java 14' };
  }
}
