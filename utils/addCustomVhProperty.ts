import debounce from "lodash.debounce";

export const addCustomVhProperty = () => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setVh();

  const calculateVhOnResize = debounce(setVh, 50);

  window.addEventListener("resize", calculateVhOnResize);
  window.addEventListener("orientationchange", calculateVhOnResize);
};
