import  { useState } from 'react';
import './carousel2.css';
import { Link } from 'react-router-dom';

function Carousel2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "https://i.ibb.co/VqJgtvP/topo-3.jpg", alt: "topo" },
    { src: "https://i.ibb.co/92641Hz/topo-1.webp", alt: "topo 2" },
    { src: "https://i.ibb.co/HK7pDrq/topo-2.webp", alt: "topo 3" },
    { src: "https://i.ibb.co/rf30rhq/topo-4.webp", alt: "Caixinha 4" },
    { src: "https://i.ibb.co/wMDh0PN/topo-6.webp", alt: "topo 5" }
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
      <h1>Topos de bolos</h1>
      <div className="carousel-container">
        <button className="prev" onClick={prevSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <Link to="/topo">
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

export default Carousel2;


