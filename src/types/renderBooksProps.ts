export type TopChartsType = {
  image: string;
  reads: string;
  title: string;
  trends: number;
  type: string;
};

export interface RenderBooksProps<T> {
  books: T[];
  onBookPress: (item: T) => void;
}
