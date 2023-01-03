import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../service/restaurant.service";

@Component({
  selector: 'app-create-restaurants',
  templateUrl: './create-restaurants.component.html',
  styleUrls: ['./create-restaurants.component.scss']
})
export class CreateRestaurantsComponent implements OnInit{
  data: any
  constructor(private restaurantService: RestaurantService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.createRestaurant();
  }

  createRestaurant(restaurant: any){
    this.restaurantService.addRestaurant(restaurant).subscribe((res: any) =>{
      this.data=res
      console.log(res)
    })
  }

}
