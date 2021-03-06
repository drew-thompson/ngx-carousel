/**
 * Represents an individual image to be rendered within a carousel.
 */
export interface CarouselImage {
  /** Location of image to render. */
  url: string;
  /** Alt description to bind to this image. */
  alt?: string;
}

export interface CarouselItem {
  /** Image to render for this item. */
  image: CarouselImage;
  /** Optional text to be rendered with the carousel item. */
  title?: string;
}

/** All four cardinal directions. */
export type CardinalDirection = 'north' | 'east' | 'south' | 'west';

/** How an image will be displayed. */
export type ImageDisplayMode = 'cover' | 'contain' | 'initial';
