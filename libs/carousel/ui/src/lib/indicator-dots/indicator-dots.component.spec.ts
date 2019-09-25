import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDotsComponent } from './indicator-dots.component';

describe('IndicatorDotsComponent', () => {
  let component: IndicatorDotsComponent;
  let fixture: ComponentFixture<IndicatorDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorDotsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
