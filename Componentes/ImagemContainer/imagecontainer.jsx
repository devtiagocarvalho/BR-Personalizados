import "./ImagemContainer.css";
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function ImagemContainer() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const banners = [
        {
            image: "https://recreio.com.br/media/_versions/animacoes/bob_esponja_idade_capa_widelg.jpg",
            link: "/agendas"
        },
        {
            image: "https://miro.medium.com/v2/resize:fit:2560/0*a7shK9d22h06xpn_.jpg",
            link: "/escolar"
        },
        {
            image: "https://i.ibb.co/jjgzPKC/imagem-capa.webp",
            link: "/convites"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        autoplay: false,  // Changed from true to false
        autoplaySpeed: 3000
    };

    return (
        <div className="banner-container">
            {isMobile ? (
                <div className="mobile-carousel">
                    <Slider {...settings}>
                        {banners.map((banner, index) => (
                            <Link to={banner.link} key={index}>
                                <div className="banner-slide">
                                    <img 
                                        src={banner.image}
                                        alt="Banner"
                                        className="banner-image"
                                    />
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="w-full flex justify-center" style={{ margin: '0', padding: '0', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
                    <img 
                        src="/src/imagens/coleção.webp" 
                        alt="foto" 
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        className="imagem-pura" 
                    />
                </div>
            )}
        </div>
    );
}

export default ImagemContainer;