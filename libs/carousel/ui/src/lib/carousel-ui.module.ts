import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@ngx-carousel/common/material';
import { IndicatorDotComponent } from './indicator-dot/indicator-dot.component';
import { IndicatorDotsComponent } from './indicator-dots/indicator-dots.component';
import { CarouselItemComponent } from './item/carousel-item.component';
import { NavigationArrowComponent } from './navigation-arrow/navigation-arrow.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [
    NavigationArrowComponent,
    CarouselItemComponent,
    IndicatorDotComponent,
    IndicatorDotsComponent
  ],
  exports: [
    NavigationArrowComponent,
    CarouselItemComponent,
    IndicatorDotComponent,
    IndicatorDotsComponent
  ]
})
export class CarouselUiModule {}
