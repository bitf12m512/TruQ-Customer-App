import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-location',
  templateUrl: './confirm-location.page.html',
  styleUrls: ['./confirm-location.page.scss'],
})
export class ConfirmLocationPage implements OnInit {
  public minDate;
  constructor() {
   this.minDate = new Date().getFullYear();
   }

  ngOnInit() {
  }

}
