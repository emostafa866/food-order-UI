import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../../group.service';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent {

  @Input() group: any;
  user_ask_join:any={groupId:0}
  is_owner: boolean = false;
  isGroupUser: boolean = false;


  constructor(private router: Router, private groupServ: GroupService) { }

  ngOnInit(): void {
    if (this.loggedIn()) {
      this.groupServ.isOwner(this.group.id).subscribe((res: any) => {
        this.is_owner = res;
        console.log(res)
      });

      this.groupServ.isGroupUser(this.group.id).subscribe((res:any)=>{

        this.isGroupUser=res;

      })
    }
  }

  loggedIn() {
    return localStorage.getItem('auth')
  }
  onClick(id:number) {
    this.user_ask_join.groupId=id
    console.log(this.user_ask_join)
    this.groupServ.askToJoin(this.user_ask_join).subscribe((res: any) => {
      console.log("succues join")
    }, error => {
      alert("Error to join")
    })
  }

}
