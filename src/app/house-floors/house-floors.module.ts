import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseFloorsPageRoutingModule } from './house-floors-routing.module';

import { HouseFloorsPage } from './house-floors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseFloorsPageRoutingModule
  ],
  declarations: [HouseFloorsPage]
})
export class HouseFloorsPageModule {}
