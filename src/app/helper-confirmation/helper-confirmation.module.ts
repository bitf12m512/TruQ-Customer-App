import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelperConfirmationPageRoutingModule } from './helper-confirmation-routing.module';

import { HelperConfirmationPage } from './helper-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelperConfirmationPageRoutingModule
  ],
  declarations: [HelperConfirmationPage]
})
export class HelperConfirmationPageModule {}
