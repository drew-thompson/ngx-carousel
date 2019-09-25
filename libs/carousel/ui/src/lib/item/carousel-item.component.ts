import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CarouselItem } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselItemComponent {
  /** Carousel item to render. */
  @Input() item: CarouselItem;
  /** Whether default typography bindings should be ignored. */
  @Input() overrideTypography = false;
}
