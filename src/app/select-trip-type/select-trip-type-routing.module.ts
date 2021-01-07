import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTripTypePage } from './select-trip-type.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTripTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTripTypePageRoutingModule {}
