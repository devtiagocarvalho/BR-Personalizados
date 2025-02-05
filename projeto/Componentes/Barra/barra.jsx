import './barra.css';
import parcelamentoImage from '../../imagens/parcelamento.webp';
import pixImage from '../../imagens/pix.jpg';
import entregaImage from '../../imagens/entrega.webp';

function Barra() {
    return (
        <section className='barra'>
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
        </section>
    );
}

export default Barra;
