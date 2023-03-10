import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'group',
    loadChildren: () =>
      import('./groups/groups.module').then((m) => m.GroupsModule),
  },
  {
    path: 'restaurant',
    loadChildren: () =>
      import('./restaurant/restaurant.module').then((m) => m.RestaurantModule),
  },
  {
    path: 'food',
    loadChildren: () =>
      import('./restaurant/restaurant.module').then((m) => m.RestaurantModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
