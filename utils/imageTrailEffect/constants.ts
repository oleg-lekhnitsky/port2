import { Power1 } from "gsap";

export const THRESHOLD_POINTER_DISTANCE_VALUE = 70;
export const AVERAGE_IMAGE_DIAGONAL = 130;
export const DELTA_IMAGE_DIAGONAL = 120;
export const IMAGE_TRANSITION = {
  APPEARANCE_EASE: Power1.easeOut,
  DISAPPEARANCE_EASE: Power1.easeIn,
  DISAPPEARANCE_DELAY: 1,
  DURATION: 0.7,
  TOTAL_DURATION: 0.7 + 0.7 + 1,
};
export const IS_IMAGES_DISAPPEAR = false;
