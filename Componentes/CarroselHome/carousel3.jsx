import  { useState } from 'react';
import './carousel3.css';

function Carousel3() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "https://i.ibb.co/prcgcGz/agenda-1.jpg", alt: "escolar" },
    { src: "https://i.ibb.co/XVCw837/agenda-2.jpg", alt: "escolar 2" },
    { src: "https://i.ibb.co/qsZQKsk/agenda-5.webp", alt: "escolar 3" },
    { src: "https://i.ibb.co/6tX6hqW/material.webp", alt: "escolar 4" },
    { src: "https://i.ibb.co/6sX0LMc/etiquetas.jpg", alt: "escolar 5" },
    { src: "https://i.ibb.co/jWKPgMM/l-pis.webp", alt: "escolar 6" }
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
      <h1>Materias escolares personalizados</h1>
      <div className="carousel-container">
        <button className="prev" onClick={prevSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image.src} alt={image.alt} />
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

export default Carousel3;
