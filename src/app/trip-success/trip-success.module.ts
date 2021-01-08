import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripSuccessPageRoutingModule } from './trip-success-routing.module';

import { TripSuccessPage } from './trip-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripSuccessPageRoutingModule
  ],
  declarations: [TripSuccessPage]
})
export class TripSuccessPageModule {}
