import { Component, OnInit } from '@angular/core';
import { GroupService } from './../../group.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  id:any
  orderItems:any[]=[];

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.getOrderSummaryPerItem();

  }

  constructor(private groupService:GroupService,private route:ActivatedRoute){}

  
getOrderSummaryPerItem(){
this.groupService.getOrderSummaryPerItem(this.id).subscribe((res:any)=>{
  
  this.orderItems=res;
  console.log(res);

})


}

}
