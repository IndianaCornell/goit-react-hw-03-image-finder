import { ImageItem } from './ImageGalleryItem.Styled';

export const ImageGalleryItem = ({ imageUrl }) => {
  return (
    <li>
      <ImageItem src={imageUrl} alt="" />
    </li>
  );
};
