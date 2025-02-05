
import { Link } from "react-router-dom";
import "./sobrenos.css"
import { useEffect } from "react";

function SobreNos() {
    useEffect(() => {
        // Adiciona a classe 'sobre-nos' ao body
        document.body.classList.add("sobre-nos");
        console.log("sobre-nos")

        // Remove a classe ao desmontar o componente
        return () => {
            document.body.classList.remove("sobre-nos");
        
        };
        
    }, []);
    

    return (
        <>
           <Link to="/"> <h1 className="voltarsobre">VOLTAR</h1> </Link>      
            <div className="figura">
                <img src="../../imagens/logo.webp" alt="figura" />
                <h6 className="text">Somos a BR Personalizados e ajudamos você a realizar seus sonhos desde 2018! Temos tudo o que você procura em caixinhas, tubetes, painéis, agendas escolares, lápis personalizados e muito mais! Nosso objetivo é fazer com que você tenha tudo do seu jeitinho, com a sua cara, além de transformar sua festa em um evento inesquecível.

Seja para aniversários, casamentos ou qualquer celebração especial, estamos aqui para dar vida às suas ideias. Cada detalhe é pensado com carinho para refletir sua personalidade e estilo. Na BR Personalizados, você encontra não apenas produtos, mas também um compromisso com a qualidade e a satisfação. Venha nos visitar e descubra como podemos tornar sua festa dos sonhos uma realidade!</h6> 
            </div>
              
            <div></div>
        </>
    );
}

export default SobreNos;