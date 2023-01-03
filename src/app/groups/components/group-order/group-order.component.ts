import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from './../../group.service';

@Component({
  selector: 'app-group-order',
  templateUrl: './group-order.component.html',
  styleUrls: ['./group-order.component.scss']
})
export class GroupOrderComponent implements OnInit {

  summary: any = 'users'
  GroupId: any = { groupId: 0 }

  constructor(private groupService: GroupService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.GroupId.groupId = this.route.snapshot.params['id']
  }


  detectChanges(e: any) {

    this.summary = e.target.value

    console.log(this.summary)

  }
  finish() {
    var x: any = document.getElementById("snackbar");
    x.className = "show";
    this.groupService.finishGroup(this.GroupId).subscribe(res => {
      console.log(res)
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
      this.router.navigate(['/'])

    }, error => {
      alert("Error to finish Group")
    })
  }
}
