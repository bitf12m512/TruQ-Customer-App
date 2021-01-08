import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedTripsPage } from './shared-trips.page';

const routes: Routes = [
  {
    path: '',
    component: SharedTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedTripsPageRoutingModule {}
