export type Category = {
  id: string;
  name: string;
};

export type CategoryListProps = {
  onCategoryClick: (categoryName: string, categoryId: string) => void;
};
