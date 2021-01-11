import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentWalletPage } from './payment-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentWalletPageRoutingModule {}
