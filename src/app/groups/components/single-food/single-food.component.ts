import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-food',
  templateUrl: './single-food.component.html',
  styleUrls: ['./single-food.component.scss']
})
export class SingleFoodComponent {
  qty: number = 1;

  @Input() food: any ;

}
