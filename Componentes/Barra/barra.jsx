import './barra.css';
import parcelamentoImage from '../../imagens/parcelamento.webp';
import pixImage from '../../imagens/pix.jpg';
import entregaImage from '../../imagens/entrega.webp';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Barra() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const items = [
        { image: parcelamentoImage, text: "pague no cartão", alt: "parcelamento" },
        { image: pixImage, text: "pague pelo pix", alt: "pix" },
        { image: entregaImage, text: "envio para todo Brasil", alt: "entrega" }
    ];

    return (
        <section className='barra'>
            {isMobile ? (
                <div className="barra-mobile-carousel">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div key={index} className='item-mobile'>
                                <img src={item.image} alt={item.alt} />
                                <h1 className='mensagem'>{item.text}</h1>
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                <>
                    <div className='item'>
                        <img src={parcelamentoImage} alt="parcelamento" />
                        <h1 className='mensagem'>pague no cartão</h1>
                    </div>

                    <div className='item'>
                        <img src={pixImage} alt="pix" />
                        <h1 className='mensagem'>pague pelo pix</h1>
                    </div>

                    <div className='item'>
                        <img src={entregaImage} alt="entrega" />
                        <h1 className='mensagem'>envio para todo Brasil</h1>
                    </div>
                </>
            )}
        </section>
    );
}

export default Barra;
