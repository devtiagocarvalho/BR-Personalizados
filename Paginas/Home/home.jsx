import "./home.css"
import Barra from "../../Componentes/Barra/barra";
import Carousel from "../../Componentes/CarroselHome/carousel";
import Carousel2 from "../../Componentes/CarroselHome/carousel2";
import Carousel3 from "../../Componentes/CarroselHome/carousel3";
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import ImgFinal from "../../Componentes/ImagemFinal/ImagemFinal";
import Footer from "../../Paginas/Footer/footer"
import ImagemContainer from "../../Componentes/ImagemContainer/imagecontainer";

 function Home(){

    return (
        <section>
            <Header/>
            <Menu/>
            <ImagemContainer/>
            <Barra/>
            <Carousel/> 
            <Carousel2/>  
            <Carousel3/> 
            <ImgFinal/>
            <Footer/>
            </section>
        
    )

}

export default Home;