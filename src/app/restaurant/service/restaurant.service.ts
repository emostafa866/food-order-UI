import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  addRestaurant(Restaurant: any){
    return this.http.post("http://localhost:9090/restaurants", Restaurant)
  }

  getAllRestaurants(){
    return this.http.get("http://localhost:9090/restaurants")
  }

  getRestaurantById(id: number){
    return this.http.get("http://localhost:9090/restaurants/id" + id);
  }

  getRestaurantByName(name: string){
    return this.http.get("http://localhost:9090/restaurants" + name)
  }

  deleteRestaurant(id: number){
    return this.http.delete("http://localhost:9090/restaurants" + id);
  }
}
