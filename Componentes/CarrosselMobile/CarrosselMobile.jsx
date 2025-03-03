import { Link } from 'react-router-dom';
import './CarrosselMobile.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

function CarrosselMobile() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const categories = [
        {
            name: "Agendas",
            image: "https://i.ibb.co/prcgcGz/agenda-1.jpg",
            path: "/agendas"
        },
        {
            name: "Material Escolar",
            image: "https://i.ibb.co/6sX0LMc/etiquetas.jpg",
            path: "/escolar"
        },
        {
            name: "Topos de Bolo",
            image: "https://i.ibb.co/VqJgtvP/topo-3.jpg",
            path: "/topo"
        },
        {
            name: "Canecas",
            image: "https://img.elo7.com.br/product/600x380/50BE073/caneca-personalizada-palmeira-5-palmeira.jpg",
            path: "/canecas"
        },
        {
            name: "Caixinhas",
            image: "https://i.ibb.co/dJ4g5nY5/dois.jpg",
            path: "/caixinhas"
        },
        {
            name: "Diversos",
            image: "https://i.ibb.co/dJ4g5nY5/dois.jpg",
            path: "/acessorios"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 3000
    };

    if (!isMobile) return null;

    return (
        <div className="mobile-category-carousel">
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <Link to={category.path} key={index}>
                        <div className="category-item">
                            <div className="category-image">
                                <img src={category.image} alt={category.name} />
                            </div>
                            <p>{category.name}</p>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default CarrosselMobile;