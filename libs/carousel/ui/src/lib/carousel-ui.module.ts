import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@ngx-carousel/common/material';
import { CarouselItemComponent } from './item/carousel-item.component';
import { NavigationArrowComponent } from './navigation-arrow/navigation-arrow.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [NavigationArrowComponent, CarouselItemComponent],
  exports: [NavigationArrowComponent, CarouselItemComponent]
})
export class CarouselUiModule {}
