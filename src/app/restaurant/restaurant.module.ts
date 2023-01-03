import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { FoodComponent } from './components/food/food.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AllRestaurantsComponent } from './components/restaurant/all-restaurants/all-restaurants.component';
import { CreateRestaurantsComponent } from './components/restaurant/create-restaurants/create-restaurants.component';
import { GetRestaurantsComponent } from './components/restaurant/get-restaurants/get-restaurants.component';
import { DeleteRestaurantsComponent } from './components/restaurant/delete-restaurants/delete-restaurants.component';
import { CreateFoodComponent } from './components/food/create-food/create-food.component';
import { AllFoodsComponent } from './components/food/all-foods/all-foods.component';
import { GetFoodComponent } from './components/food/get-food/get-food.component';
import { UpdateFoodComponent } from './components/food/update-food/update-food.component';
import { DeleteFoodComponent } from './components/food/delete-food/delete-food.component';


@NgModule({
  declarations: [
    FoodComponent,
    RestaurantComponent,
    AllRestaurantsComponent,
    CreateRestaurantsComponent,
    GetRestaurantsComponent,
    DeleteRestaurantsComponent,
    CreateFoodComponent,
    AllFoodsComponent,
    GetFoodComponent,
    UpdateFoodComponent,
    DeleteFoodComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
