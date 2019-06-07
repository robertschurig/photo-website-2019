import { ImageGridItem } from '../components/img-grid/img-grid.models';

export interface ImageCollection {
  name: string;
  date: string;
  images: ImageGridItem[];
}
