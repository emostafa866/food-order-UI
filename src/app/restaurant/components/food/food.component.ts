import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/groups/group.service';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  data: any[] = [];
  food: any = { name: '', price: '', photo: '' };
  restaurant: any;
  constructor(
    private groupService: GroupService,
    private restaurantService: RestaurantService
  ) {}
  ngOnInit(): void {
    this.viewRest();
  }

  viewRest() {
    this.groupService.getAllRestaurants().subscribe((res: any) => {
      this.data = res;
    });
  }
  addFood() {
    this.restaurantService
      .addFood(this.food, this.restaurant)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
