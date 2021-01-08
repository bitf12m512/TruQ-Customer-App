import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnGoingTripPageRoutingModule } from './on-going-trip-routing.module';

import { OnGoingTripPage } from './on-going-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnGoingTripPageRoutingModule
  ],
  declarations: [OnGoingTripPage]
})
export class OnGoingTripPageModule {}
