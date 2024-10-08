import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestCardComponent } from './create-any-vacation-request.component';

describe('CreateAnyVacationRequestComponent', () => {
  let component: VacationRequestCardComponent;
  let fixture: ComponentFixture<VacationRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequestCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
