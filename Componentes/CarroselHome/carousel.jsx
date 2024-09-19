import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom
import './carousel.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "https://i.ibb.co/Lk1xkvQ/caixinha-4.webp", alt: "Caixinha unicórnio" },
    { src: "https://i.ibb.co/GHdjWSw/caixinha-2.webp", alt: "Caixinha 2" },
    { src: "https://i.ibb.co/Lk1xkvQ/caixinha-4.webp", alt: "Caixinha 3" },
    { src: "https://i.ibb.co/wNkCQLh/caixinha-5.webp", alt: "Caixinha 4" },
    { src: "https://i.ibb.co/Lk1xkvQ/caixinha-4.webp", alt: "Caixinha 5" }
  ];

  const slideWidth = 100 / 3; // 3 slides visíveis

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < images.length - 3 ? prevSlide + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : images.length - 3
    );
  };

  return (
    <div className="carousel-wrapper">
      <h1>Caixinhas</h1>
      <div className="carousel-container">
        <button className="prev" onClick={prevSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <Link to="/caixinhas"> {/* Adiciona o Link ao redor da imagem */}
                <img src={image.src} alt={image.alt} />
              </Link>
            </div>
          ))}
        </div>

        <button className="next" onClick={nextSlide}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
