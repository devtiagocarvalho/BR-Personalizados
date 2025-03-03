import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom
import PropTypes from 'prop-types'; // Importa PropTypes
import './Carousel.css';
import imageConfig from '../../config/images';
import { CATEGORIES } from '../../config/images';

// Componente de carrossel que exibe imagens de uma categoria específica
function Carousel({ category }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Obtém as imagens da categoria especificada do arquivo de configuração
  const images = imageConfig.carrossel[category].images;
  const slideWidth = 100 / 3;

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      // Se não chegou ao final, avança; se chegou, volta ao início
      prevSlide < images.length - 3 ? prevSlide + 1 : 0
    );
  };

  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      // Se não está no início, volta; se está, vai para o final
      prevSlide > 0 ? prevSlide - 1 : images.length - 3
    );
  };

  return (
    <div className="carousel-wrapper">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="carousel-container">
        {/* Botão para voltar ao slide anterior */}
        <button className="prev" onClick={prevSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        {/* Container dos slides com transformação CSS para movimento */}
        <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
          {images.map((image) => (
            <div className="carousel-item" key={image.id}>
              <Link to={`/${imageConfig.carrossel[category].path}`}>
                <img src={image.src} alt={image.alt} />
              </Link>
            </div>
          ))}
        </div>

        {/* Botão para avançar ao próximo slide */}
        <button className="next" onClick={nextSlide}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  category: PropTypes.oneOf(Object.values(CATEGORIES)).isRequired
};

export default Carousel;
