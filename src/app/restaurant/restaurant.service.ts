import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  addRestaurant(Restaurant: any) {
    return this.http.post('http://localhost:9090/restaurants', Restaurant);
  }
  addFood(Food: any, id: number) {
    return this.http.post(
      `http://localhost:9090/foods/toRestaurants/${id}`,
      Food
    );
  }
}
