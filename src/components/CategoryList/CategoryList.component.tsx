import Spinner from '@/common/Spinner';
import ErrorDisplay from '@/common/ErrorDisplay';
import { useGetAllCategoriesQuery } from '@/api/cat.api';
import { Category } from '@/components/CategoryList/CategoryList.type';
import './CategoryList.style.scss';

const CategoryList: React.FC<{
  onCategoryClick: (name: string, id: string) => void;
}> = ({ onCategoryClick }) => {
  const { error, data: categories, isLoading } = useGetAllCategoriesQuery({});

  return (
    <div className="categoryList">
      <ul className="categoryList__list">
        {isLoading && <Spinner />}
        {error && (
          <li>
            <ErrorDisplay error={error} />
          </li>
        )}
        {!isLoading &&
          !error &&
          categories.map((category: Category) => (
            <li
              key={category.id}
              className={'categoryList__item'}
              onClick={() => onCategoryClick(category.name, category.id)}
            >
              {category.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryList;
