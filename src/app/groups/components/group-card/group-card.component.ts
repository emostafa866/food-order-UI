import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent {

  @Input() group: any;

  constructor( private router: Router){}

  loggedIn() {
    return localStorage.getItem('auth')
  }

  
}
