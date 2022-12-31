
import { Component, OnInit } from '@angular/core';
import { GroupCreation } from '../../group';
import { GroupService } from '../../group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})

export class CreateGroupComponent implements OnInit
 {

data:any[]=[]
group_privacy:any;
restaurant:any;
restaurantId:any;
  constructor(private groupService:GroupService){}

  ngOnInit(): void {
    this.viewRest();
  }



    viewRest(){
      this.groupService.getAllRestaurants().subscribe((res:any)=>{
        this.data=res;
      })
    }

    addGroup(form:any){
        this.groupService.createGroup({
            title:form.value.title,
            anyOneCanJoinWithoutRequest:this.group_privacy,
            restaurantId:this.restaurant
        }).subscribe((res:any)=>{
          console.log(res);
        })
      

    }
}
