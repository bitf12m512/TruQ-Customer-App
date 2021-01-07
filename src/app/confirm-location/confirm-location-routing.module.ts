import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmLocationPage } from './confirm-location.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmLocationPageRoutingModule {}
