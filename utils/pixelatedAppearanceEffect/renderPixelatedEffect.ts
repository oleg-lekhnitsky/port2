import type { ISizes } from "./types";

interface IRenderPixelatedEffectClosureArgs {
  canvasSizes: ISizes;
  pixelArray: Uint8ClampedArray;
  context: CanvasRenderingContext2D;
}

export const renderPixelatedEffectClosure =
  ({ canvasSizes, pixelArray, context }: IRenderPixelatedEffectClosureArgs) =>
  (inputTargetPixelSize: number) => {
    const targetPixelSize = inputTargetPixelSize * devicePixelRatio;

    const fittedInWidthPixelsCount = Math.floor(
      canvasSizes.width / targetPixelSize
    );
    const fittedInHeightPixelsCount = Math.floor(
      canvasSizes.height / targetPixelSize
    );

    const floatPixelSize = {
      width: canvasSizes.width / fittedInWidthPixelsCount,
      height: canvasSizes.height / fittedInHeightPixelsCount,
    };

    const sizesCompensationAccumulator = {
      width: 0,
      height: 0,
    };

    const sizesCompensationIntegerPart = {
      width: 0,
      height: 0,
    };

    const actualPixelSize = {
      width: targetPixelSize,
      height: targetPixelSize,
    };

    for (
      let y = 0;
      y <= canvasSizes.height - targetPixelSize;
      y += targetPixelSize
    ) {
      sizesCompensationAccumulator.height +=
        floatPixelSize.height - targetPixelSize;
      sizesCompensationIntegerPart.height = Math.floor(
        sizesCompensationAccumulator.height
      );
      sizesCompensationAccumulator.height -=
        sizesCompensationIntegerPart.height;
      actualPixelSize.height =
        targetPixelSize + sizesCompensationIntegerPart.height;

      if (y + targetPixelSize * 2 >= canvasSizes.height) {
        actualPixelSize.height += 1;
      }

      sizesCompensationAccumulator.width = 0;

      for (
        let x = 0;
        x <= canvasSizes.width - targetPixelSize;
        x += targetPixelSize
      ) {
        sizesCompensationAccumulator.width +=
          floatPixelSize.width - targetPixelSize;
        sizesCompensationIntegerPart.width = Math.floor(
          sizesCompensationAccumulator.width
        );
        sizesCompensationAccumulator.width -=
          sizesCompensationIntegerPart.width;
        actualPixelSize.width =
          targetPixelSize + sizesCompensationIntegerPart.width;

        if (x + targetPixelSize * 2 >= canvasSizes.width) {
          actualPixelSize.width += 1;
        }

        const pixelIndex =
          (x +
            Math.round(actualPixelSize.width / 2) +
            (y + Math.round(actualPixelSize.height / 2)) * canvasSizes.width) *
          4;

        context.fillStyle = `rgba(${pixelArray[pixelIndex]}, ${
          pixelArray[pixelIndex + 1]
        }, ${pixelArray[pixelIndex + 2]}, ${pixelArray[pixelIndex + 3]})`;

        context.fillRect(x, y, actualPixelSize.width, actualPixelSize.height);

        x += sizesCompensationIntegerPart.width;
      }

      y += sizesCompensationIntegerPart.height;
    }
  };
