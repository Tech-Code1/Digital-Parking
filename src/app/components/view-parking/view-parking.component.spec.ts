import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParkingComponent } from './view-parking.component';

describe('ViewParkingComponent', () => {
  let component: ViewParkingComponent;
  let fixture: ComponentFixture<ViewParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
