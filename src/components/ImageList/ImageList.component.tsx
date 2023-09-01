import { useState, useEffect } from 'react';
import Spinner from '@/common/Spinner';
import ImageView from '@/common/ImageView';
import ErrorDisplay from '@/common/ErrorDisplay';
import { useGetImagesByCategoryQuery } from '@/api/cat.api';
import { Image } from './ImageList.type';
import './ImageList.style.scss';

type ImageListProps = {
  categoryId: string | null;
};

const ImageList: React.FC<ImageListProps> = ({ categoryId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allImages, setAllImages] = useState<Image[]>([]);
  const {
    data: images,
    isLoading,
    isError,
    error,
  } = useGetImagesByCategoryQuery(
    categoryId ? { page: currentPage, categoryId } : undefined,
    { skip: !categoryId }
  );

  useEffect(() => {
    if (categoryId) {
      setAllImages([]);
      setCurrentPage(1);
    }
  }, [categoryId]);

  useEffect(() => {
    if (images) {
      setAllImages((prevImages) => [...prevImages, ...images]);
    }
  }, [images]);

  const handleButtonClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="imageList__spinner">
          <Spinner />
        </div>
      );
    } else if (isError && error) {
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
