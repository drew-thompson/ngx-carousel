import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDotComponent } from './indicator-dot.component';

describe('IndicatorDotComponent', () => {
  let component: IndicatorDotComponent;
  let fixture: ComponentFixture<IndicatorDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorDotComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
