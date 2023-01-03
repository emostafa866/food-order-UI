import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

   getAllFood(){
     return this.http.get("http://localhost:9090/foods")
  }

   getFoodById(id: number){
     return this.http.get("http://localhost:9090/foods" + id);
  }

  addFood(Food : any, id : number){
    return this.http.post(`http://localhost:9090/foods/toRestaurant/${id}` , Food)
  }

  updateFood(Food: any, id: number){
    return this.http.post(`http://localhost:9090/foods/${id}` , Food)
  }

  deleteFood(id: number){
    return this.http.delete("http://localhost:9090/foods" + id)
  }

}
