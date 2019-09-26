import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';
import { CarouselControlAction } from '@ngx-carousel/data/enums';

@Component({
  selector: 'ngx-carousel-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {
  @HostBinding('class.ngx-carousel-controls') on = true;
  /** Whether the slideshow is running. */
  @Input() isPlaying: boolean;

  /** Emits when a user has interacted with a control. */
  @Output() controlled: EventEmitter<CarouselControlAction> = new EventEmitter<
    CarouselControlAction
  >();

  /** Exposing enum for use in template. */
  CarouselControlAction = CarouselControlAction;
}
