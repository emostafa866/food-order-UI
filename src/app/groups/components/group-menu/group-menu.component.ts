import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent {

  constructor(private router:Router){

  }

  viewGroupOrder(){
    this.router.navigate(['group/group-order'])
  }
}
