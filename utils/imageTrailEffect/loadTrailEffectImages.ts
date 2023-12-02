const loadImage = (url: string) =>
  new Promise<HTMLImageElement | null>((resolve) => {
    const image = new Image();

    image.src = url;

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      resolve(null);
    };
  });

export const loadTrailEffectImages = async (imageUrls: string[]) => {
  const imagePromiseResults = await Promise.allSettled(
    imageUrls.map((url) => loadImage(url))
  );

  const images = imagePromiseResults
    .map((result) => {
      if (result.status === "fulfilled") {
        return result.value;
      } else {
        return null;
      }
    })
    .filter((result) => result !== null) as HTMLImageElement[];

  return images;
};
