import { PropTypes } from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s['ImageGalleryItem-image']} src={webformatURL} alt={tags}/>
    </li>
  )
}

ImageGalleryItem.protoTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
}

export default ImageGalleryItem;