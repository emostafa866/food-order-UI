import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestaurantsComponent } from './delete-restaurants.component';

describe('DeleteRestaurantsComponent', () => {
  let component: DeleteRestaurantsComponent;
  let fixture: ComponentFixture<DeleteRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestaurantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
