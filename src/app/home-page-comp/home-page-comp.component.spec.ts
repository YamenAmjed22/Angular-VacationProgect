import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCompComponent } from './home-page-comp.component';

describe('HomePageCompComponent', () => {
  let component: HomePageCompComponent;
  let fixture: ComponentFixture<HomePageCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
