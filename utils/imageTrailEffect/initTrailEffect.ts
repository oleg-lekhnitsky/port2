import {
  IMAGE_TRANSITION,
  IS_IMAGES_DISAPPEAR,
  THRESHOLD_POINTER_DISTANCE_VALUE,
} from "./constants";
import { getNewDrawingImage } from "./getNewDrawingImage";
import { loadTrailEffectImages } from "./loadTrailEffectImages";
import type {
  ICoordinates,
  IDrawingImage,
  IInitTrailEffectProps,
} from "./types";

export const initTrailEffect = async (
  canvasRef: globalThis.Ref<HTMLCanvasElement | null>,
  { imageUrls }: IInitTrailEffectProps
) => {
  const imagesArray = await loadTrailEffectImages(imageUrls);
  let drawingImages: IDrawingImage[] = [];
  let nextImageIndex = 0;

  let context: CanvasRenderingContext2D | null;

  let devicePixelRatio: number;

  let previousPointerCoordinates: ICoordinates = { x: 0, y: 0 };
  let pointerDistanceFromLastImage = 0;

  const handlePointerMove = (event: MouseEvent | TouchEvent) => {
    const pointerCoordinates: ICoordinates = {
      x: 0,
      y: 0,
    };

    if (event instanceof MouseEvent) {
      pointerCoordinates.x = event.offsetX;
      pointerCoordinates.y = event.offsetY;
    }

    if (typeof TouchEvent !== "undefined" && event instanceof TouchEvent) {
      if (canvasRef.value) {
        const firstTouch = event.touches[0];
        const canvasBoundingClientRect =
          canvasRef.value.getBoundingClientRect();

        pointerCoordinates.x = firstTouch.clientX - canvasBoundingClientRect.x;
        pointerCoordinates.y = firstTouch.clientY - canvasBoundingClientRect.y;
      }
    }

    pointerDistanceFromLastImage += Math.sqrt(
      (previousPointerCoordinates.x - pointerCoordinates.x) ** 2 +
        (previousPointerCoordinates.y - pointerCoordinates.y) ** 2
    );

    if (pointerDistanceFromLastImage > THRESHOLD_POINTER_DISTANCE_VALUE) {
      pointerDistanceFromLastImage = 0;

      const imageElement = imagesArray[nextImageIndex];

      const drawingImage = getNewDrawingImage({
        imageElement,
        pointerCoordinates,
      });

      drawingImages.push(drawingImage);

      if (IS_IMAGES_DISAPPEAR) {
        setTimeout(() => {
          drawingImages = drawingImages.filter(
            ({ id }) => id !== drawingImage.id
          );
        }, IMAGE_TRANSITION.TOTAL_DURATION * 1000);
      }

      nextImageIndex = (nextImageIndex + 1) % imagesArray.length;
    }

    previousPointerCoordinates = pointerCoordinates;
  };

  const renderCanvas = () => {
    if (canvasRef.value) {
      context?.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

      drawingImages.forEach((image) => {
        context?.drawImage(
          image.element,
          image.topLeftCoordinate.x,
          image.topLeftCoordinate.y,
          image.sizes.width,
          image.sizes.height
        );
      });
    }

    requestAnimationFrame(renderCanvas);
  };

  const handleResize = () => {
    if (canvasRef.value) {
      canvasRef.value.width = window.innerWidth * devicePixelRatio;
      canvasRef.value.height = window.innerHeight * devicePixelRatio;
    }
  };

  const handleMount = () => {
    if (canvasRef.value) {
      context = canvasRef.value?.getContext("2d") ?? null;

      devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvasRef.value.width = window.innerWidth * devicePixelRatio;
      canvasRef.value.height = window.innerHeight * devicePixelRatio;

      renderCanvas();

      canvasRef.value.addEventListener("mousemove", handlePointerMove);
      canvasRef.value.addEventListener("touchmove", handlePointerMove);
      window.addEventListener("resize", handleResize);
    }
  };

  const handleUnmount = () => {
    if (canvasRef.value) {
      canvasRef.value.removeEventListener("mousemove", handlePointerMove);
      canvasRef.value.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
    }
  };

  return {
    handleMount,
    handleUnmount,
  };
};
