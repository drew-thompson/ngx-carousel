import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CardinalDirection, CarouselItem } from '@ngx-carousel/data/models';

/**
 * Displays a list of `CarouselItem`s in a navigable, accessible slideshow format.
 */
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
  /** Whether the slideshow functionality begins upon injection. */
  @Input() automatic: boolean;
  /** If designated as `automatic`, the number of ms before the slideshow begins. */
  @Input() delay = 0;
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

  /**
   * Begins automatic progression of the carousel's slideshow functionality.
   */
  play(): void {}

  /**
   * Pauses automatic progression of the carousel's slideshow functionality, retaining current state.
   */
  pause(): void {}

  /**
   * Stops and resets the carousel's slideshow functionality to initial constraints.
   */
  stop(): void {}
}
