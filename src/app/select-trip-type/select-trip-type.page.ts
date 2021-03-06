import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-trip-type',
  templateUrl: './select-trip-type.page.html',
  styleUrls: ['./select-trip-type.page.scss'],
})
export class SelectTripTypePage implements OnInit {
  public tripType: string = 'express';
  constructor(public router: Router) { }
  public showModal : boolean = false;
  ngOnInit() {
  }
  selectedTrip() {
    if (this.tripType == 'express' || this.tripType == 'houseMove') {
      this.showModal = true;
    }
    else {
      this.router.navigate(['/shared-trips']);
    }
  }
}
