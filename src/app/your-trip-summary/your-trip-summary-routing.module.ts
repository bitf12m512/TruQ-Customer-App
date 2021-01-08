import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourTripSummaryPage } from './your-trip-summary.page';

const routes: Routes = [
  {
    path: '',
    component: YourTripSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourTripSummaryPageRoutingModule {}
