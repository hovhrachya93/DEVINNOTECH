export type Image = {
  id: string;
  url: string;
};

export type ImageListProps = {
  categoryId: string | null;
};

export interface Category {
  id: string;
  name: string;
}

export type CategoryListProps = {
  onCategoryClick: (name: string, id: string) => void;
};
