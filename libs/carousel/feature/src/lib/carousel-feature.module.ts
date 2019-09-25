import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule],
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
