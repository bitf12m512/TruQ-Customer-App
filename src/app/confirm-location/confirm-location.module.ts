import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmLocationPageRoutingModule } from './confirm-location-routing.module';

import { ConfirmLocationPage } from './confirm-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmLocationPageRoutingModule
  ],
  declarations: [ConfirmLocationPage]
})
export class ConfirmLocationPageModule {}
