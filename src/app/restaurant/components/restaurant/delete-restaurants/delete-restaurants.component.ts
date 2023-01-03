import {Component, OnInit} from '@angular/core';

import {RestaurantService} from "../../../service/restaurant.service";

@Component({
  selector: 'app-delete-restaurants',
  templateUrl: './delete-restaurants.component.html',
  styleUrls: ['./delete-restaurants.component.scss']
})
export class DeleteRestaurantsComponent implements OnInit{

  constructor(private restaurantService: RestaurantService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.removeRestaurant();
  }

  removeRestaurant(id: number){
    this.restaurantService.deleteRestaurant(id).subscribe((res: any) =>{
      console.log(res)
    })
  }

}
