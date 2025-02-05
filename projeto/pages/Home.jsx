import Carousel from '../Componentes/CarroselHome/carousel';
import Header from '../Componentes/Header/header';
import Menu from '../Componentes/Menu/menu';
import Barra from '../Componentes/Barra/barra';
import { CATEGORIES } from '../config/images';
// ... outros imports

function Home() {
    return (
        <>
            <Header />
            <Menu />
            <Barra />
            
            {/* Carrosséis automáticos */}
            {Object.values(CATEGORIES).map(category => (
                <Carousel key={category} category={category} />
            ))}
            
            {/* ... resto do conteúdo */}
        </>
    );
}

export default Home; 