import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations';

export function fadeFromDirection(
  duration: number = 400
): AnimationTriggerMetadata {
  return trigger('crossfade', [
    transition(':enter', [
      style({ opacity: 0.5 }),
      animate(`${duration}ms ease-in-out`)
    ]),
    transition(':leave', [
      animate(`${duration}ms ease-in-out`, style({ opacity: 0 }))
    ])
  ]);
}
