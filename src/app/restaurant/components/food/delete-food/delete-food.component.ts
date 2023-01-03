import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../service/food.service";

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.scss']
})
export class DeleteFoodComponent implements OnInit{


  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
  }

  deleteFood(id: any){
    this.foodService.deleteFood(id).subscribe((res: any) => {
      console.log(res)
    })
  }
}
