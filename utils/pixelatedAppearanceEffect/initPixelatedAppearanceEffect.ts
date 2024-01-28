import gsap from "gsap";
import { ANIMATION_PROPERTIES, START_PIXEL_SIZE } from "./constants";
import debounce from "lodash.debounce";
import type { ISizes } from "./types";
import { renderPixelatedEffectClosure } from "./renderPixelatedEffect";

interface IInitPixelatedAppearanceEffectProps {
  canvasRef: globalThis.Ref<HTMLCanvasElement | null>;
  containerRef: globalThis.Ref<HTMLDivElement | null>;
}

interface IUnmountEntities {
  appearanceAnimation: gsap.core.Tween | null;
  handleResizeWithDebounce: (() => void) | null;
}

export const initPixelatedAppearanceEffect = ({
  canvasRef,
  containerRef,
}: IInitPixelatedAppearanceEffectProps) => {
  let isAnimationComplete = false;

  const unmountEntities: IUnmountEntities = {
    appearanceAnimation: null,
    handleResizeWithDebounce: null,
  };

  const handleMount = async () => {
    const imageElement =
      containerRef.value?.querySelector<HTMLImageElement>(".imageElement") ??
      null;
    const context =
      canvasRef.value?.getContext("2d", {
        willReadFrequently: true,
      }) ?? null;

    if (
      canvasRef.value === null ||
      context === null ||
      imageElement === null ||
      containerRef.value === null
    ) {
      return;
    }

    const animationState = {
      pixelSize: START_PIXEL_SIZE,
    };

    const devicePixelRatio = Math.min(Math.ceil(window.devicePixelRatio), 2);

    interface ISetCanvasParametersOutput {
      canvasSizes: ISizes;
      pixelArray: Uint8ClampedArray;
    }

    const setCanvasParameters = () =>
      new Promise<ISetCanvasParametersOutput>((resolve) => {
        const canvasSizes: ISizes = {
          width: imageElement.width * devicePixelRatio,
          height: imageElement.height * devicePixelRatio,
        };

        const handleImageLoaded = () => {
          const imageAspectRatio = imageElement.width / imageElement.height;
          const drawImageData = {
            x: 0,
            y: 0,
            width: canvasSizes.width,
            height: canvasSizes.height,
          };

          if (imageElement.height > imageElement.width) {
            drawImageData.x = -(imageElement.height - imageElement.width);
            drawImageData.width /= imageAspectRatio;
          } else {
            drawImageData.y = -(imageElement.width - imageElement.height);
            drawImageData.height *= imageAspectRatio;
          }

          if (canvasRef.value) {
            canvasRef.value.width = canvasSizes.width;
            canvasRef.value.height = canvasSizes.height;
          }

          context?.drawImage(
            imageElement,
            drawImageData.x,
            drawImageData.y,
            drawImageData.width,
            drawImageData.height
          );

          const pixelArray = context?.getImageData(
            0,
            0,
            canvasSizes.width,
            canvasSizes.height
          ).data;

          resolve({ canvasSizes, pixelArray });
        };

        if (imageElement.complete) {
          handleImageLoaded();
        } else {
          imageElement.onload = () => {
            handleImageLoaded();
          };
        }
      });

    let { canvasSizes, pixelArray } = await setCanvasParameters();

    const renderPixelatedEffect = renderPixelatedEffectClosure({
      canvasSizes,
      context,
      pixelArray,
      devicePixelRatio,
    });

    renderPixelatedEffect(START_PIXEL_SIZE);

    const appearanceAnimation = gsap.to(animationState, {
      pixelSize: 0,
      duration: ANIMATION_PROPERTIES.DURATION,
      delay: ANIMATION_PROPERTIES.DELAY,
      ease: `steps(${ANIMATION_PROPERTIES.STEPS_COUNT})`,
      onUpdate: () => {
        const pixelSize = Math.floor(animationState.pixelSize);

        if (pixelSize > 1) {
          renderPixelatedEffect(pixelSize);
        } else {
          if (canvasRef.value) {
            containerRef.value?.removeChild(canvasRef.value);
          }

          appearanceAnimation.pause().kill();
          isAnimationComplete = true;
          unmountEntities.appearanceAnimation = null;
        }
      },
      scrollTrigger: {
        trigger: containerRef.value,
      },
    });

    unmountEntities.appearanceAnimation = appearanceAnimation;

    const handleResizeWithDebounce = debounce(async () => {
      if (!isAnimationComplete) {
        const canvasParameters = await setCanvasParameters();

        canvasSizes = canvasParameters.canvasSizes;
        pixelArray = canvasParameters.pixelArray;

        const currentPixelSize = Math.floor(animationState.pixelSize);

        renderPixelatedEffect(currentPixelSize);
      }
    }, 100);

    unmountEntities.handleResizeWithDebounce = handleResizeWithDebounce;

    window.addEventListener("resize", handleResizeWithDebounce);
  };

  const handleUnmount = () => {
    if (unmountEntities.appearanceAnimation !== null) {
      unmountEntities.appearanceAnimation.pause().kill();
    }

    if (unmountEntities.handleResizeWithDebounce !== null) {
      window.removeEventListener(
        "resize",
        unmountEntities.handleResizeWithDebounce
      );
    }
  };

  return {
    handleMount,
    handleUnmount,
  };
};
