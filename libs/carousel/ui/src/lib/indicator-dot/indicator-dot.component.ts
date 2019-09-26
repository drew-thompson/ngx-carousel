import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'ngx-carousel-indicator-dot',
  templateUrl: './indicator-dot.component.html',
  styleUrls: ['./indicator-dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorDotComponent {
  /** Whether this dot represents the selected index. */
  @Input() isSelected: boolean;
  /** Number of pixels wide to render this dot. */
  @Input() diameter = 32;

  @Output() selected: EventEmitter<void> = new EventEmitter<void>();
}
