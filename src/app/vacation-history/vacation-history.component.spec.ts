import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationHistoryComponent } from './vacation-history.component';

describe('VacationHistoryComponent', () => {
  let component: VacationHistoryComponent;
  let fixture: ComponentFixture<VacationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
