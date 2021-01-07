import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTripTypePageRoutingModule } from './select-trip-type-routing.module';

import { SelectTripTypePage } from './select-trip-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectTripTypePageRoutingModule
  ],
  declarations: [SelectTripTypePage]
})
export class SelectTripTypePageModule {}
