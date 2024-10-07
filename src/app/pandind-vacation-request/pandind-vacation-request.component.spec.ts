import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandindVacationRequestComponent } from './pandind-vacation-request.component';

describe('PandindVacationRequestComponent', () => {
  let component: PandindVacationRequestComponent;
  let fixture: ComponentFixture<PandindVacationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandindVacationRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandindVacationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
