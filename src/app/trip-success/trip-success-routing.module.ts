import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripSuccessPage } from './trip-success.page';

const routes: Routes = [
  {
    path: '',
    component: TripSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripSuccessPageRoutingModule {}
