import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'ngx-carousel-indicator-dots',
  templateUrl: './indicator-dots.component.html',
  styleUrls: ['./indicator-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorDotsComponent {
  @HostBinding('class.ngx-indicator-dots') on: true;
  /** The total length of the array these dots represent. */
  @Input() length: number;
  /** The currently selected index of the array. */
  @Input() current: number;

  /** Emits when a carousel dot was selected. */
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  getIterable(): undefined[] {
    return new Array(this.length);
  }
}
