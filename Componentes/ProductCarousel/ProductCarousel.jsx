// Componente que cria um carrossel de imagens com miniatura e visualização ampliada
import { useState } from 'react';
import './ProductCarousel.css';
import PropTypes from 'prop-types'; // Importa PropTypes para validação de props

// Componente principal do carrossel
const ProductCarousel = ({ images }) => {
  // Estado para controlar qual imagem está sendo exibida como principal
  const [mainImage, setMainImage] = useState(images[0]); // Inicia com a primeira imagem do array

  return (
    <div className="product-carousel">
      {/* Container da imagem principal */}
      <div className="main-image-container">
        <img src={mainImage} alt="Produto" className="main-image" />
      </div>

      {/* Container das miniaturas */}
      <div className="thumbnail-container">
        {/* Mapeia todas as imagens para criar as miniaturas */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => setMainImage(image)} // Ao clicar, atualiza a imagem principal
          />
        ))}
      </div>
    </div>
  );
};

// Validação das props usando PropTypes
ProductCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired // Espera um array de strings (URLs das imagens)
};

export default ProductCarousel;
