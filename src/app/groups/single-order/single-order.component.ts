import { Component, OnInit } from '@angular/core';
import { GroupService } from './../group.service';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {

  OrderSummary:any[]=[]
  


  constructor(private groupSer: GroupService){

  }
  ngOnInit(): void {

   for(let order of this.groupSer.userOrderSummary){
    if(order.orders.length>0){
      this.OrderSummary.push(order);
    }
      console.log(this.OrderSummary);

   }

   for(let data of this.OrderSummary){

      console.log(data.orders);
   }
    
  }

  

}
