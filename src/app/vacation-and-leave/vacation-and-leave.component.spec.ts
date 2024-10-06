import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationAndLeaveComponent } from './vacation-and-leave.component';

describe('VacationAndLeaveComponent', () => {
  let component: VacationAndLeaveComponent;
  let fixture: ComponentFixture<VacationAndLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationAndLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationAndLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
