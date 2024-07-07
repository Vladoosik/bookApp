// types
import {DetailedBookType} from './mockIType.ts';

export interface ReadingType {
  item: DetailedBookType | null;
  onContainerPress?: () => void;
}
