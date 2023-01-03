import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { FoodComponent } from './components/food/food.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RestaurantComponent, FoodComponent],
  imports: [CommonModule, SharedModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
