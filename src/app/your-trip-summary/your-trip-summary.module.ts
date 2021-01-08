import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourTripSummaryPageRoutingModule } from './your-trip-summary-routing.module';

import { YourTripSummaryPage } from './your-trip-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourTripSummaryPageRoutingModule
  ],
  declarations: [YourTripSummaryPage]
})
export class YourTripSummaryPageModule {}
