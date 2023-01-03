import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../service/food.service";

@Component({
  selector: 'app-all-foods',
  templateUrl: './all-foods.component.html',
  styleUrls: ['./all-foods.component.scss']
})
export class AllFoodsComponent implements OnInit{
  Foods: any =[];

  ngOnInit(): void {
    this.getFoods()
  }

  constructor(private foodService: FoodService) { }

  getFoods(){
    this.foodService.getAllFood().subscribe((res : any) => {
      this.Foods= res;
      console.log(res)
    }, error => {
      alert("Can't found any food")
    })
  }

}
