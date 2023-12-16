import { screenType } from "../screenMediaQuery";

interface IInitGalleryContainerArgs {
  containerRef: Ref<HTMLDivElement | null>;
  childrenCount: number;
}

export const initGalleryContainer = ({
  containerRef,
  childrenCount,
}: IInitGalleryContainerArgs) => {
  const activeItemIndexRef = ref<number | null>(0);

  const effectSizes = {
    clientWidth: 0,
    hoverColumnWidth: 0,
  };

  const handleMouseMove = (event: MouseEvent) => {
    activeItemIndexRef.value = Math.floor(
      event.offsetX / effectSizes.hoverColumnWidth
    );
  };

  const setSizes = () => {
    if (screenType.value === "mouse" && containerRef.value !== null) {
      effectSizes.clientWidth = containerRef.value.clientWidth;
      effectSizes.hoverColumnWidth = effectSizes.clientWidth / childrenCount;
    }
  };

  const handleScreenTypeChange = () => {
    handleUnmount();
    handleMount();
  };

  const handleMount = () => {
    setSizes();

    if (screenType.value === "mouse" && containerRef.value !== null) {
      containerRef.value.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", setSizes);
      window.addEventListener("handleScreenTypeChange", handleScreenTypeChange);
    }
  };

  const handleUnmount = () => {
    if (containerRef.value !== null) {
      containerRef.value.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setSizes);
      window.removeEventListener(
        "handleScreenTypeChange",
        handleScreenTypeChange
      );
    }
  };

  return {
    handleMount,
    handleUnmount,
    activeItemIndexRef,
  };
};
