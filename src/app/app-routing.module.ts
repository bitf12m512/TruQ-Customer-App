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
  },
  {
    path: 'your-trip-summary',
    loadChildren: () => import('./your-trip-summary/your-trip-summary.module').then( m => m.YourTripSummaryPageModule)
  },
  {
    path: 'trip-success',
    loadChildren: () => import('./trip-success/trip-success.module').then( m => m.TripSuccessPageModule)
  },
  {
    path: 'shared-trips',
    loadChildren: () => import('./shared-trips/shared-trips.module').then( m => m.SharedTripsPageModule)
  },
  {
    path: 'your-trips',
    loadChildren: () => import('./your-trips/your-trips.module').then( m => m.YourTripsPageModule)
  },
  {
    path: 'trip-detail',
    loadChildren: () => import('./trip-detail/trip-detail.module').then( m => m.TripDetailPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'on-going-trip',
    loadChildren: () => import('./on-going-trip/on-going-trip.module').then( m => m.OnGoingTripPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'payment-wallet',
    loadChildren: () => import('./payment-wallet/payment-wallet.module').then( m => m.PaymentWalletPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./transaction-history/transaction-history.module').then( m => m.TransactionHistoryPageModule)
  },
  {
    path: 'referral',
    loadChildren: () => import('./referral/referral.module').then( m => m.ReferralPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'payment-confirmation',
    loadChildren: () => import('./payment-confirmation/payment-confirmation.module').then( m => m.PaymentConfirmationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
