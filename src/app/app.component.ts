import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstproject';
  paths = [
      {pathname: './simple-form', title: "Simple form"},
      {pathname: './better-form', title: "Better form"},
      {pathname: './controls', title: "Controls"}
  ]
}
