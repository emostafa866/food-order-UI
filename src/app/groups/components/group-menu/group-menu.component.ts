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
  foods:any=[]
  constructor(private router: Router, private route: ActivatedRoute ,private groupSer:GroupService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getOne(this.id)
  }
  getOne(id:number){
    this.groupSer.getGroupById(id).subscribe((res: any) => {
      this.foods=res.restaurant.foods
      console.log(res.restaurant)
    }, error => {
      alert("Error in Get Data")
    })
    }

  viewGroupOrder() {
    this.router.navigate(['group/group-order'])
  }
}
