import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnGoingTripPage } from './on-going-trip.page';

const routes: Routes = [
  {
    path: '',
    component: OnGoingTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnGoingTripPageRoutingModule {}
