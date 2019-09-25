import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  /** Images to display in carousel. */
  @Input() images: string[];
  /** Whether the carousel bounds fold into each other. */
  @Input() revolves = true;

  constructor() {}

  ngOnInit() {}
}
