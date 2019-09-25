import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CardinalDirection, CarouselItem } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  /** Items to display in carousel. */
  @Input() items: CarouselItem[];
  /** Initial index of provided `items` to select. Defaults to `0` if index is out of range. */
  @Input() initialIndex = 0;
  /** Whether the carousel bounds fold into each other. */
  @Input() revolves = true;
  /** Whether the carousel includes navigation arrows on either side of the carousel. */
  @Input() hasArrows = true;
  /** Navigation directions to display when arrow navigation is enabled. */
  @Input() arrowDirs: CardinalDirection[] = ['east', 'west'];

  private index: number;

  constructor() {}

  ngOnInit() {
    if (this.items[this.initialIndex]) {
      this.index = this.initialIndex;
    } else {
      this.index = 0;
    }
  }

  /**
   * Returns the currently selected item index.
   */
  getCurrentIndex(): number {
    return this.index;
  }
}
