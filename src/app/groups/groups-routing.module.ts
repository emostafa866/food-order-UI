import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGroupsComponent } from './components/all-groups/all-groups.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { GroupMenuComponent } from './components/group-menu/group-menu.component';
import { GroupOrderComponent } from './components/group-order/group-order.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
  {path:"",component:AllGroupsComponent},
  {path:"create",component:CreateGroupComponent},
  {path:"group-menu/:id",component:GroupMenuComponent},
  {path:"group-order/:id",component:GroupOrderComponent},
  {path:"details/:id",component:FoodDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
