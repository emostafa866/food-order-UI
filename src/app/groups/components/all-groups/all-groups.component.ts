import { Component } from '@angular/core';
import { GroupService } from '../../group.service';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.scss']
})
export class AllGroupsComponent  {
  groups:any=[]
  ngOnInit(): void {

      this.getGroups();

  }

  constructor(private groupServ:GroupService){}

  getGroups(){
    this.groupServ.getAllGroups().subscribe((res: any) => {
      this.groups = res;
      console.log(res)
    }, error => {
      alert("Error in Get Data")
    })
  }
}
