import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  id:any
  foodItem:any={}
  constructor(private groupService:GroupService , private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getFoodById(this.id)
  }

  getFoodById(foodId:any){
    this.groupService.getFoodId(foodId).subscribe((res)=>{
      this.foodItem=res
      console.log(res)
    })
  }

}
