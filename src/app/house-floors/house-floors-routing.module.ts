import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseFloorsPage } from './house-floors.page';

const routes: Routes = [
  {
    path: '',
    component: HouseFloorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseFloorsPageRoutingModule {}
