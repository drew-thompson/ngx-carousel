import { async, TestBed } from '@angular/core/testing';
import { CarouselUiModule } from './carousel-ui.module';

describe('CarouselUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarouselUiModule).toBeDefined();
  });
});
