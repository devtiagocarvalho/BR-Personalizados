import { useState } from 'react';
import './ProductCarousel.css';
import PropTypes from 'prop-types';


const ProductCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-carousel">
      <div className="main-image-container">
        <img src={mainImage} alt="Produto" className="main-image" />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  descricao: PropTypes.string}

export default ProductCarousel;
