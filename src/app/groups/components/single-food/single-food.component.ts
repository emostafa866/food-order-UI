import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-food',
  templateUrl: './single-food.component.html',
  styleUrls: ['./single-food.component.scss']
})
export class SingleFoodComponent {
  qty: number = 1;
  addButton= false;
  comment='';
  @Input() food: any ;
  @Output() item=new EventEmitter();

  add(){
      this.item.emit({foodItem:this.food, quantity:this.qty, comment:this.comment});
  }



}
