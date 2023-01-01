import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../group.service';



@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent implements OnInit {

  id: number = 0;
  foods: any = []
  foodCart:any[]=[]
  users_join: any = [];
  accept_user: any = { groupId: 0, userId: 0 }
  carItems:any[]=[]
  foodOrders:any[]=[]
  order:any={}
  is_owner:boolean=false;
  userOrderSummary:any[]=[]

  

  constructor(private router: Router, private route: ActivatedRoute, private groupSer: GroupService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getOne(this.id)
    this.getCartItems();

    this.groupSer.isOwner(this.id).subscribe((res: any) => {
      this.is_owner = res;
      console.log(res)
    });


  }
  getOne(id: number) {
    this.groupSer.getGroupById(id).subscribe((res: any) => {

      this.foods = res.restaurant.foods
      this.users_join = res.usersRequestToJoin

      console.log(res.usersRequestToJoin)
    }, error => {
      alert("Error in Get Data")
    })
  }

 
  acceptUser(userId: number) {
    this.accept_user.groupId = parseInt(this.id+"");
    this.accept_user.userId = userId;
    
    this.groupSer.acceptUser(this.accept_user).subscribe((res: any) => {
      console.log("succues")
    }, error => {
      alert("Error accept_user")
    })
  }

  addToCart(e:any){
    if ("cart" in localStorage){
      this.foodCart=JSON.parse( localStorage.getItem("cart")!)
      let exist = this.foodCart.find(item=>item.foodItem.id==e.foodItem.id)
      if(exist){
        alert("item is already in your cart")
      }else{
        this.foodCart.push(e)
        localStorage.setItem("cart",JSON.stringify(this.foodCart))
      }
    }else{
      this.foodCart.push(e)
      localStorage.setItem("cart",JSON.stringify(this.foodCart))
    }
  }

  getCartItems(){

    if("cart" in localStorage){
      this.carItems=JSON.parse( localStorage.getItem("cart")!)
      
    }
  }

  deleteItem(index:number){

    this.carItems.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(this.foodCart))

  }

  createOrder(){
    
    for(let item of this.carItems){
      this.foodOrders.push({itemId:item.foodItem.id,quantity:item.quantity,comment:item.comment})
    }

    this.order.food=this.foodOrders;
  
    this.groupSer.createUserOrder(this.order,this.id).subscribe((res:any)=>{
      console.log(res);
      localStorage.clear();
    })
  }

  viewGroupOrder() {
    this.groupSer.getOrderSummaryPerUser(this.id).unsubscribe
  }
 


}
