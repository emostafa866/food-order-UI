import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../service/restaurant.service";

@Component({
  selector: 'app-get-restaurants',
  templateUrl: './get-restaurants.component.html',
  styleUrls: ['./get-restaurants.component.scss']
})
export class GetRestaurantsComponent implements OnInit{

  constructor(private restaurantService: RestaurantService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.getRestaurantById();
    // @ts-ignore
    this.getRestaurantByName();
  }

  getRestaurantById(id: number){
    this.restaurantService.getRestaurantById(id).subscribe((res: any) =>{
      console.log(res)
    })
  }

  getRestaurantByName(name: string){
    this.restaurantService.getRestaurantByName(name).subscribe((res: any) =>{
      console.log(res)
    })
  }



}
