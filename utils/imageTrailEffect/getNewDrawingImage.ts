import {
  AVERAGE_IMAGE_DIAGONAL,
  DELTA_IMAGE_DIAGONAL,
  IMAGE_TRANSITION,
} from "./constants";
import type { ICoordinates, IDrawingImage, ISizes } from "./types";
import gsap from "gsap";

interface IGetNewImageDrawingImage {
  imageElement: HTMLImageElement;
  pointerCoordinates: ICoordinates;
  isImagesDisappear: boolean;
}

export const getNewDrawingImage = ({
  imageElement,
  pointerCoordinates,
  isImagesDisappear,
}: IGetNewImageDrawingImage): IDrawingImage => {
  const initialCoordinates: ICoordinates = {
    x: pointerCoordinates.x * devicePixelRatio,
    y: pointerCoordinates.y * devicePixelRatio,
  };

  const drawingImage: IDrawingImage = {
    element: imageElement,
    topLeftCoordinate: initialCoordinates,
    sizes: {
      width: 0,
      height: 0,
    },
    id: Date.now(),
  };

  const imageAspectRatio =
    drawingImage.element.naturalWidth / drawingImage.element.naturalHeight;

  const imageDiagonal =
    AVERAGE_IMAGE_DIAGONAL +
    DELTA_IMAGE_DIAGONAL * Math.random() -
    DELTA_IMAGE_DIAGONAL / 2;

  const imageSizes: ISizes = {
    width:
      (imageDiagonal * imageAspectRatio) / Math.sqrt(1 + imageAspectRatio ** 2),
    height: imageDiagonal / Math.sqrt(1 + imageAspectRatio ** 2),
  };

  const timeline = gsap.timeline({
    defaults: {
      duration: IMAGE_TRANSITION.DURATION,
    },
  });

  timeline.to(drawingImage.sizes, {
    width: imageSizes.width * devicePixelRatio,
    height: imageSizes.height * devicePixelRatio,
    ease: IMAGE_TRANSITION.APPEARANCE_EASE,
  });
  timeline.to(
    drawingImage.topLeftCoordinate,
    {
      x: (pointerCoordinates.x - imageSizes.width / 2) * devicePixelRatio,
      y: (pointerCoordinates.y - imageSizes.height / 2) * devicePixelRatio,
      ease: IMAGE_TRANSITION.APPEARANCE_EASE,
    },
    "<"
  );

  if (isImagesDisappear) {
    timeline.to(drawingImage.sizes, {
      width: 0,
      height: 0,
      ease: IMAGE_TRANSITION.DISAPPEARANCE_EASE,
      delay: IMAGE_TRANSITION.DISAPPEARANCE_DELAY,
    });
    timeline.to(
      drawingImage.topLeftCoordinate,
      {
        ...initialCoordinates,
        ease: IMAGE_TRANSITION.DISAPPEARANCE_EASE,
      },
      "<"
    );
  }

  return drawingImage;
};
