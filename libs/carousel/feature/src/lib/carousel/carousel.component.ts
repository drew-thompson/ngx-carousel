import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CarouselItem } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  /** Items to display in carousel. */
  @Input() items: CarouselItem[];
  /** Whether the carousel bounds fold into each other. */
  @Input() revolves = true;
  /** Whether the carousel includes navigation arrows on either side of the carousel. */
  @Input() hasArrows = true;

  constructor() {}

  ngOnInit() {}
}
