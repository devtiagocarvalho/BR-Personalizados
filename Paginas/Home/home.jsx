import "./home.css"
import Barra from "../../Componentes/Barra/barra";
import Carousel from "../../Componentes/CarroselHome/carousel";
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import ImgFinal from "../../Componentes/ImagemFinal/ImagemFinal";
import Footer from "../../Componentes/Footer/footer"
import ImagemContainer from "../../Componentes/ImagemContainer/imagecontainer";
import { CATEGORIES } from '../../config/images';
import CarrosselMobile from "../../Componentes/CarrosselMobile/CarrosselMobile";
import Diversos from "../PaginasMobile/diversos"; // Importar apenas uma vez

function Home() {
    return (
        <section>
            <Header/>
            <Menu/>
            <ImagemContainer/>
            <Barra/>
            <CarrosselMobile />
            <Diversos />
            <nav>
                {Object.values(CATEGORIES).map(category => (
                    <Carousel key={category} category={category} />
                ))}
            </nav>
            <ImgFinal/>
            <footer>
                <Footer/>
            </footer>
        </section>
    );
}

export default Home;