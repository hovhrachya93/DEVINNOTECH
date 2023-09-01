import { useEffect } from 'react';
import Spinner from '@/common/Spinner';
import { useSelector } from 'react-redux';
import ErrorDisplay from '@/common/ErrorDisplay';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { RootState } from '@/redux/reducers/rootReducer';
import { Category, CategoryListProps } from './CategoryList.type';
import { fetchCategories } from '@/redux/actions/categories.actions';
import './CategoryList.style.scss';

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="categoryList">
      <ul className="categoryList__list">
        {loading && <Spinner />}
        {error && (
          <li>
            <ErrorDisplay error={error} />
          </li>
        )}
        {!loading &&
          categories.map((category: Category) => (
            <li
              key={category.id}
              className="categoryList__item"
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
