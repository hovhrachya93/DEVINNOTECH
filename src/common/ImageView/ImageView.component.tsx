import React from 'react';
import { ImageViewgeProps } from '@/common/ImageView/ImageViewge.type';

const ImageViewge: React.FC<ImageViewgeProps> = ({ imageUrl }) => {
  const alt = imageUrl.match(/\/([^/]+)\.(?=[^.]+$)/)?.[1];

  return (
    <img
      src={imageUrl}
      alt={alt}
      style={{ width: '100%', height: '200px' }}
      loading="lazy"
    />
  );
};

export default ImageViewge;
