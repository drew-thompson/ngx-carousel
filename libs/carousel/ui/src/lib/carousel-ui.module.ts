import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@ngx-carousel/common/material';
import { NavigationArrowComponent } from './navigation-arrow/navigation-arrow.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [NavigationArrowComponent],
  exports: [NavigationArrowComponent]
})
export class CarouselUiModule {}
