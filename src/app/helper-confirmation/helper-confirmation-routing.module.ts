import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelperConfirmationPage } from './helper-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: HelperConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelperConfirmationPageRoutingModule {}
