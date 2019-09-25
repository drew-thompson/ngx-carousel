import { async, TestBed } from '@angular/core/testing';
import { CarouselFeatureModule } from './carousel-feature.module';

describe('CarouselFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarouselFeatureModule).toBeDefined();
  });
});
