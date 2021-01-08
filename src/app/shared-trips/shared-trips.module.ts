import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedTripsPageRoutingModule } from './shared-trips-routing.module';

import { SharedTripsPage } from './shared-trips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedTripsPageRoutingModule
  ],
  declarations: [SharedTripsPage]
})
export class SharedTripsPageModule {}
