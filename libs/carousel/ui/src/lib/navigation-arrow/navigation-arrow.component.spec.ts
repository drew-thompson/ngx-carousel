import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationArrowComponent } from './navigation-arrow.component';

describe('NavigationArrowComponent', () => {
  let component: NavigationArrowComponent;
  let fixture: ComponentFixture<NavigationArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
