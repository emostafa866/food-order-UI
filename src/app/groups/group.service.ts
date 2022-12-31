import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }
  getAllGroups() { return this.http.get('http://localhost:9090/groups'); }
  createGroup(model: any) { return this.http.post(`http://localhost:9090/groups`, model); }
  getAllRestaurants() { return this.http.get("http://localhost:9090/restaurants") }
  getGroupById(id: number) { return this.http.get('http://localhost:9090/groups/' + id); }
  isOwner(idGroup: number) { return this.http.get('http://localhost:9090/groups/isAdmin/' + idGroup) }
  acceptUser(accept_user: any) { return this.http.post('http://localhost:9090/groups/accept', accept_user) }
  askToJoin(user_ask_join: any) { return this.http.post('http://localhost:9090/groups/join', user_ask_join) }
=======
  
  getAllGroups() {
    return this.http.get('http://localhost:9090/groups');
  }

  getGroupById(id: number) {
    return this.http.get('http://localhost:9090/groups/' + id);
  }
  
  
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
