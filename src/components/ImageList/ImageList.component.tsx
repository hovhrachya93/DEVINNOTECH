import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '@/common/Spinner';
import ImageView from '@/common/ImageView';
import ErrorDisplay from '@/common/ErrorDisplay';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Image, ImageListProps } from './ImageList.type';
import { RootState } from '@/redux/reducers/rootReducer';
import { fetchImages } from '@/redux/actions/images.actions';
import { ImagesState } from '@/redux/reducers/images.reducer';
import './ImageList.style.scss';

const ImageList: React.FC<ImageListProps> = ({ categoryId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allImages, setAllImages] = useState<Image[]>([]);

  const { images, loading, error } = useSelector(
    (state: RootState) => state.images
  ) as ImagesState;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categoryId) {
      setAllImages([]);
    }
  }, [categoryId]);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchImages(currentPage, categoryId));
      setCurrentPage(1);
    }
  }, [currentPage, categoryId, dispatch]);

  useEffect(() => {
    if (images) {
      setAllImages((prevImages) => [...prevImages, ...images]);
    }
  }, [images]);

  const handleButtonClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="imageList__spinner">
          <Spinner />
        </div>
      );
    } else if (error) {
      return (
        <div className="imageList__error">
          <ErrorDisplay error={error} />
        </div>
      );
    } else if (categoryId === null) {
      return <p className="imageList__placeholder">Please select a category</p>;
    } else {
      return (
        <>
          {allImages.map((image: any) => (
            <ImageView key={image.id} imageUrl={image.url} />
          ))}
          {allImages.length !== 0 && (
            <button className="imageList__button" onClick={handleButtonClick}>
              Load More
            </button>
          )}
        </>
      );
    }
  };

  return (
    <div className="imageList">
      <p className="imageList__title">Cat Images</p>
      <div className="imageList__grid">{renderContent()}</div>
    </div>
  );
};

export default ImageList;
