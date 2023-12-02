import { loadTrailEffectImages } from "./loadTrailEffectImages";
import type { IInitTrailEffectProps } from "./types";
import gsap, { Power1 } from "gsap";

interface ICoordinates {
  x: number;
  y: number;
}

interface ISizes {
  width: number;
  height: number;
}

interface IDrawingImage {
  id: number;
  element: HTMLImageElement;
  topLeftCoordinate: ICoordinates;
  sizes: ISizes;
}

const THRESHOLD_POINTER_DISTANCE_VALUE = 70;
const AVERAGE_IMAGE_DIAGONAL = 130;
const DELTA_IMAGE_DIAGONAL = 120;

export const initTrailEffect = async (
  canvasRef: globalThis.Ref<HTMLCanvasElement | null>,
  { imageUrls, isImagesDisappear = false }: IInitTrailEffectProps
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

    if (event instanceof TouchEvent) {
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

      const initialCoordinates: ICoordinates = {
        x: pointerCoordinates.x * devicePixelRatio,
        y: pointerCoordinates.y * devicePixelRatio,
      };

      const drawingImage: IDrawingImage = {
        element: imagesArray[nextImageIndex],
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
          (imageDiagonal * imageAspectRatio) /
          Math.sqrt(1 + imageAspectRatio ** 2),
        height: imageDiagonal / Math.sqrt(1 + imageAspectRatio ** 2),
      };

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: Power1.easeOut,
        },
      });

      timeline.to(drawingImage.sizes, {
        width: imageSizes.width * devicePixelRatio,
        height: imageSizes.height * devicePixelRatio,
      });
      timeline.to(
        drawingImage.topLeftCoordinate,
        {
          x: (pointerCoordinates.x - imageSizes.width / 2) * devicePixelRatio,
          y: (pointerCoordinates.y - imageSizes.height / 2) * devicePixelRatio,
        },
        "<"
      );

      if (isImagesDisappear) {
        timeline.to(drawingImage.sizes, {
          width: 0,
          height: 0,
          delay: 1,
          ease: Power1.easeIn,
        });
        timeline.to(
          drawingImage.topLeftCoordinate,
          {
            ...initialCoordinates,
            ease: Power1.easeIn,
            onComplete: () => {
              drawingImages = drawingImages.filter(
                ({ id }) => id !== drawingImage.id
              );
            },
          },
          "<"
        );
      }

      drawingImages.push(drawingImage);

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
