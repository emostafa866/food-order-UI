import { Component, OnInit } from '@angular/core';
import { GroupService } from './../group.service';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {

  OrderSummary: any[] = []
  OrderSummary1: any[] = []



  constructor(private groupSer: GroupService) {

  }
  ngOnInit(): void {
    console.log(this.groupSer.userOrderSummary)
    this.OrderSummary1 = this.groupSer.userOrderSummary
  }



  
}
