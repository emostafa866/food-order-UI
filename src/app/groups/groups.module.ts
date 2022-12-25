import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { AllGroupsComponent } from './components/all-groups/all-groups.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { GroupMenuComponent } from './components/group-menu/group-menu.component';
import { SharedModule } from './../shared/shared.module';
import { SingleFoodComponent } from './components/single-food/single-food.component';


@NgModule({
  declarations: [
    AllGroupsComponent,
    GroupCardComponent,
    CreateGroupComponent,
    GroupMenuComponent,
    SingleFoodComponent
  ],
  imports: [
    SharedModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
