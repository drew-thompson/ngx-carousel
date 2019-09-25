import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';
import { ThemePalette } from '@angular/material';
import { CardinalDirection } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel-navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationArrowComponent {
  @HostBinding('class.ngx-carousel-navigation-arrow') on = true;
  /** Intended direction of this button's navigation action. */
  @Input() dir: CardinalDirection;
  /** Binded HTMLButtonElement type attribute. */
  @Input() type = 'button';
  /** Color palette to apply to this navigation button. */
  @Input() color: ThemePalette = 'primary';
}
