import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParkingComponent } from './add-edit-parking.component';

describe('AddEditParkingComponent', () => {
  let component: AddEditParkingComponent;
  let fixture: ComponentFixture<AddEditParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
