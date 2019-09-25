import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { CarouselItem } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  /** Items to display in carousel. */
  @Input() items: CarouselItem[];
  /** Whether the carousel bounds fold into each other. */
  @Input() revolves = true;

  constructor() {}

  ngOnInit() {}
}
