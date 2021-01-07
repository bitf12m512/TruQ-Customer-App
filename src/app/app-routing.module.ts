import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  {
    path: 'code-verification',
    loadChildren: () => import('./code-verification/code-verification.module').then( m => m.CodeVerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'confirm-location',
    loadChildren: () => import('./confirm-location/confirm-location.module').then( m => m.ConfirmLocationPageModule)
  },
  {
    path: 'select-trip-type',
    loadChildren: () => import('./select-trip-type/select-trip-type.module').then( m => m.SelectTripTypePageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'helper-confirmation',
    loadChildren: () => import('./helper-confirmation/helper-confirmation.module').then( m => m.HelperConfirmationPageModule)
  },
  {
    path: 'select-vehicle',
    loadChildren: () => import('./select-vehicle/select-vehicle.module').then( m => m.SelectVehiclePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
