import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fadeFromDirection } from '@ngx-carousel/carousel/utils';
import { CarouselItem, ImageDisplayMode } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  animations: [fadeFromDirection(500)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselItemComponent {
  /** Carousel item to render. */
  @Input() item: CarouselItem;
  /** Whether default typography bindings should be ignored. */
  @Input() overrideTypography = false;
  /** Display mode applied to each image. */
  @Input() imageDisplayMode: ImageDisplayMode;
}
