export interface IInitTrailEffectProps {
  imageUrls: string[];
  isImagesDisappear?: boolean;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface ISizes {
  width: number;
  height: number;
}

export interface IDrawingImage {
  id: number;
  element: HTMLImageElement;
  topLeftCoordinate: ICoordinates;
  sizes: ISizes;
}
