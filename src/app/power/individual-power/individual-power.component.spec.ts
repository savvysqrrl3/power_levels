import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPowerComponent } from './individual-power.component';

describe('IndividualPowerComponent', () => {
  let component: IndividualPowerComponent;
  let fixture: ComponentFixture<IndividualPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
