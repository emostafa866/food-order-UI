import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  userOrderSummary:any[]=[]


  constructor(private http: HttpClient,private router: Router) { }

  isOwner(idGroup: number) {
     return this.http.get('http://localhost:9090/groups/isAdmin/' + idGroup) 
    }

    isGroupUser(idGroup: number) {
      return this.http.get('http://localhost:9090/groups/isGroupUser/' + idGroup) 
     }

  acceptUser(accept_user: any) {
     return this.http.post('http://localhost:9090/groups/accept', accept_user)
     }

  askToJoin(user_ask_join: any) { 
    return this.http.post('http://localhost:9090/groups/join', user_ask_join) 
  }
  
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

    createUserOrder(model:any,groupId:any){
      return this.http.post(`http://localhost:9090/groups/${groupId}/orders`,model)
    }

    createGroupOrder(groupId:any){

      return this.http.post(`http://localhost:9090/groups/${groupId}/orders/create`,groupId)

    }


    getOrderSummaryPerUser(groupId: number) {
      return this.http.get(`http://localhost:9090/groups/${groupId}/orders/users`).subscribe((res:any)=>{
        this.userOrderSummary=res;
        this.router.navigate(['group/group-order'])
      })
    }
    

  

}
