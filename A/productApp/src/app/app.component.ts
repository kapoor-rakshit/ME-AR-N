import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyName: string;
  p: any;
  disp: boolean;
  isLoading: boolean = true;        // variable for loader i.e.   *ngIf="isLoading"
  
  constructor(private _router: Router){
    this.companyName = "Wipro";
    this.disp = false;
    this.p = {name: "defaultProductName", quantity: 5};

    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
         this.isLoading = true;
      }
      else if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
         this.isLoading = false;
      }
   }) 
  }

  receiveMessage($event): void {
    this.p = $event;
  }

  receiveDisp($event): void {
    this.disp = $event;
  }
}
