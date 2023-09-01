import { useState } from 'react';
import ImageList from '@/components/ImageList';
import CategoryList from '@/components/CategoryList';
import { useNavigate, useLocation } from 'react-router-dom';

const CategoryAndImage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const initialCategory = query.get('id');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory || null
  );

  const handleCategoryClick = (categoryName: string, categoryId: string) => {
    setSelectedCategory(categoryId);
    navigate({
      ...location,
      search: `?id=${categoryId}`,
    });
  };

  return (
    <>
      <CategoryList onCategoryClick={handleCategoryClick} />
      <ImageList categoryId={selectedCategory} />
    </>
  );
};

export default CategoryAndImage;
