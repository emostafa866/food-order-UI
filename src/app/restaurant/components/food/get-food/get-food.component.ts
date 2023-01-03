import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../service/food.service";

@Component({
  selector: 'app-get-food',
  templateUrl: './get-food.component.html',
  styleUrls: ['./get-food.component.scss']
})
export class GetFoodComponent implements OnInit{

  constructor(private foodService: FoodService) {
  }


  // @ts-ignore
  ngOnInit = (id: any): void => {
    this.getFood(id)
  };

  getFood(id: any){
    this.foodService.getFoodById(id).subscribe((res: any) => {
      console.log(res)
    })
  }

}
