import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CarouselUiModule } from '@ngx-carousel/carousel/ui';
import { CommonMaterialModule } from '@ngx-carousel/common/material';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule, CarouselUiModule, CommonMaterialModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  entryComponents: [CarouselComponent]
})
export class CarouselFeatureModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const carouselElement = createCustomElement(CarouselComponent, {
      injector: this.injector
    });
    customElements.define('ngx-carousel', carouselElement);
  }
}
