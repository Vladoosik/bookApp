export interface MockIType {
  title: string;
  price?: string | number;
  image: string;
}

type BasicBookType = {
  title: string;
  image: string;
};

export type DetailedBookType = BasicBookType & {
  price?: string;
  type?: string;
  reads?: string;
  trends?: number;
};

export type BookType = BasicBookType | DetailedBookType;

export type SectionType = {
  title: string;
  books: BookType[];
};

export type BooksDataType = {
  sections: SectionType[];
};
