import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../service/restaurant.service";

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent implements OnInit{
  Restaurants: any =[];

  ngOnInit(): void {
    this.getRestaurants()
  }

  constructor(private restaurantsService: RestaurantService) { }

  getRestaurants(){
    this.restaurantsService.getAllRestaurants().subscribe((res : any) => {
      this.Restaurants= res;
      console.log(res)
    }, error => {
      alert("Can't found any food")
    })
  }

}
