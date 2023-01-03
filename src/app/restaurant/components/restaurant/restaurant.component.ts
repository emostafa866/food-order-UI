import { Component } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  reataurant: any = { name: '', phone: '' };
  constructor(private restaurantService: RestaurantService) {}
  addRestaurant() {
    this.restaurantService.addRestaurant(this.reataurant).subscribe((res) => {
      console.log(res);
    });
  }
}
