import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../service/food.service";

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.scss']
})
export class CreateFoodComponent implements OnInit{

  Food: any
  restaurantId: any
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

//   addFood(food: any, id: number){
//     this.foodService.addFood({( food:this.Food),id:this.restaurantId})
//   }
//
 }
