import { Link } from 'react-router-dom';
import "./diversos.css";
import ImgMobile from './BDMobile';

function Diversos() {
    const { tipos } = ImgMobile.paginas.Variedades;

    return (
        <>
            <h1 className='titulo-mobile'>Diversos</h1>
            <div className='imagens-diversos'>
                {Object.entries(tipos).map(([tipoKey, tipo]) => (
                    <div key={tipoKey}>
                        <h2 className="subtitulo">{tipo.titulo}</h2>
                        <div className="imagem-container">
                            {tipo.produtos.map((produto) => (
                                <div className="card" key={produto.id}>
                                    <Link 
                                        to={`/product/${encodeURIComponent(produto.nome)}`} 
                                        state={{ 
                                            produto: {
                                                ...produto,
                                                imagens: produto.imagens || [produto.imagem]
                                            }
                                        }}
                                        className="product-link"
                                    >
                                        <img src={produto.imagem} alt={produto.nome} />
                                        <p className="nome">{produto.nome}</p>
                                        {produto.tamanho && <p className="tamanho">{produto.tamanho}</p>}
                                        <p className="preco">R$ {produto.preco}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Diversos;
