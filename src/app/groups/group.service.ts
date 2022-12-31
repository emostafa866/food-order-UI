import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }
  

      getAllRestaurants(){
      return this.http.get("http://localhost:9090/restaurants")
    }


    getRestaurantByName(name:any){
      return this.http.get(`http://localhost:9090/restaurants/${name}`)
    }


    createGroup(model:any){
      return this.http.post(`http://localhost:9090/groups`,model);
    }


}
