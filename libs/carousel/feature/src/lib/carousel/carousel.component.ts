import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  CardinalDirection,
  CarouselItem,
  ImageDisplayMode
} from '@ngx-carousel/data/models';
import { Observable, of, Subscription, timer } from 'rxjs';
import { delay, throttleTime } from 'rxjs/operators';

/**
 * Displays a list of `CarouselItem`s in a navigable, accessible slideshow format.
 */
@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, OnDestroy {
  /** Items to display in carousel. */
  @Input() items: CarouselItem[];
  /** Initial index of provided `items` to select. Defaults to `0` if index is out of range. */
  @Input() initialIndex = 0;
  /** Whether the carousel bounds fold into each other. */
  @Input() revolves = true;
  /** Whether the slideshow functionality begins upon injection. */
  @Input() automatic: boolean;
  /** Number of milliseconds between automatic navigations. */
  @Input() period = 5000;
  /** If designated as `automatic`, the number of ms before the slideshow begins. */
  @Input() delay = this.period;
  /** Whether the carousel includes navigation arrows on either side of the carousel. */
  @Input() hasArrows = true;
  /** Navigation directions to display when arrow navigation is enabled. */
  @Input() arrowDirs: CardinalDirection[] = ['east', 'west'];
  /** Style of images displayed in queue. */
  @Input() imageDisplayMode: ImageDisplayMode = 'cover';

  isPlaying: boolean;

  timerSubscription: Subscription;
  timeUntilNextNavigation = this.delay;
  progress$: Observable<number>;

  private index: number;
  private dateLastNavigated: Date = new Date();

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.initIndex();

    if (this.automatic) {
      this.play();
    }
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
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
  play({
    navigationDelay = this.timeUntilNextNavigation,
    period = this.period
  }: { navigationDelay?: number; period?: number } = {}): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }

    if (this.progress$) {
      this.progress$ = of(0);
    }

    const ticks$ = timer(0, 250);
    const next$ = ticks$.pipe(
      delay(navigationDelay),
      throttleTime(period)
    );

    this.timerSubscription = next$.subscribe(() => {
      this.next();
      this.cdRef.markForCheck();
    });
    this.isPlaying = true;
  }

  /**
   * Pauses automatic progression of the carousel's slideshow functionality, retaining current state.
   */
  pause(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
    this.isPlaying = false;

    const now = new Date();
    const diff = now.getTime() - this.dateLastNavigated.getTime();
    this.timeUntilNextNavigation = this.period - diff;
  }

  /**
   * Stops and resets the carousel's slideshow functionality to initial constraints.
   */
  stop(): void {
    this.pause();
    this.timeUntilNextNavigation = 0;
    this.dateLastNavigated = undefined;
    this.index = 0;
  }

  /**
   * Navigate to the next image in the queue.
   */
  next(): void {
    const len = this.items.length;
    const isWrappingRight = this.index === len - 1;
    if (!isWrappingRight) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.updateDateLastNavigated();
  }

  /**
   * Navigate to the previous image in the queue.
   */
  prev(): void {
    const len = this.items.length;
    const isWrappingLeft = !this.index;
    if (!isWrappingLeft) {
      this.index--;
    } else {
      this.index = len - 1;
    }
    this.updateDateLastNavigated();
  }

  /**
   * Navigate forward or backward in the array of images.
   * @param direction Direction to be navigated
   */
  navigate(direction: CardinalDirection): void {
    switch (direction) {
      case 'north':
      case 'west':
        this.prev();
        break;
      case 'south':
      case 'east':
      default:
        this.next();
    }
  }

  /**
   * Navigate to a specified index within the queue of images.
   * @param index Index to navigate to
   */
  select(index: number): void {
    this.index = index;
    this.play();
  }

  onNavigated(direction: CardinalDirection): void {
    this.navigate(direction);
    this.play();
  }

  private initIndex(): void {
    if (this.items[this.initialIndex]) {
      this.index = this.initialIndex;
    } else {
      this.index = 0;
    }
  }

  private updateDateLastNavigated(): void {
    this.dateLastNavigated = new Date();
  }
}
