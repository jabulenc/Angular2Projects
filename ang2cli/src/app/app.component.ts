// Directives add behavior to the DOM 
import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';

// Component Decorator
// Components have Controller and View
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// The "controller" for the component app-root
export class AppComponent {
  fname = 'Jon';
  lname = 'Ambulance';
  today = new Date();
}
