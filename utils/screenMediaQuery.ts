let screenMediaQuery: MediaQueryList | null = null;
export let screenType: Ref<"mouse" | "touch" | null> = ref(null);

export const initScreenMediaQuery = () => {
  screenMediaQuery = window.matchMedia(
    "(any-hover: hover), (hover: hover) and (pointer: fine)"
  );

  const handleMediaQuery = (
    mediaQuery: MediaQueryList | MediaQueryListEvent
  ) => {
    screenType.value = mediaQuery.matches ? "mouse" : "touch";

    window.dispatchEvent(new Event("screenMediaQuerySetted"));
  };

  handleMediaQuery(screenMediaQuery);

  screenMediaQuery.addEventListener("change", handleMediaQuery);

  onUnmounted(() => {
    screenMediaQuery?.removeEventListener("change", handleMediaQuery);
  });
};
