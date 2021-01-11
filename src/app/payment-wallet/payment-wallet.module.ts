import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentWalletPageRoutingModule } from './payment-wallet-routing.module';

import { PaymentWalletPage } from './payment-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentWalletPageRoutingModule
  ],
  declarations: [PaymentWalletPage]
})
export class PaymentWalletPageModule {}
