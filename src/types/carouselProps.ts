// types
import {DetailedBookType} from './mockIType.ts';

export interface CarouselProps {
  data: DetailedBookType[];
  title: string;
  onBookPress?: (item: DetailedBookType) => void;
}
