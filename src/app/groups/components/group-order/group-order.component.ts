import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from './../../group.service';

@Component({
  selector: 'app-group-order',
  templateUrl: './group-order.component.html',
  styleUrls: ['./group-order.component.scss']
})
export class GroupOrderComponent {

  summary:any='users'

  constructor(private groupService : GroupService,private route: ActivatedRoute){}


  detectChanges(e:any){

  this.summary=e.target.value    

  console.log(this.summary)

  }
  finish(){

  }
}
