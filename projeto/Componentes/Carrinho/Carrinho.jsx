// Interface do carrinho de compras com lista de produtos e resumo do pedido
import { useEffect, useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Menu from '../Menu/menu';
import './Carrinho.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Componente principal do carrinho de compras
function Carrinho() {
    // Obtém funções e dados do contexto do carrinho
    const { cartItems, removeFromCart } = useCart();
    // Estado para controlar o loading da página
    const [isLoading, setIsLoading] = useState(true);

    // Efeito que roda ao montar o componente para simular carregamento
    useEffect(() => {
        // Simula um carregamento inicial
        setIsLoading(false);
    }, []);

    // Calcula o valor total dos itens no carrinho
    const calcularSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const preco = parseFloat(item.preco.replace(',', '.'));
            return total + (preco * item.quantity);
        }, 0);
    };

    // Remove um item específico do carrinho
    const handleRemoveItem = (productName) => {
        removeFromCart(productName);
    };

    // Função para processar a finalização da compra
    const handleFinalizarCompra = () => {
        // Aqui você implementará a integração com a API de pagamento
        alert('Redirecionando para o pagamento...');
        
        /* 
        // Exemplo de implementação futura com navegação:
        try {
            // Integração com API de pagamento
            const respostaPagamento = await processarPagamento(cartItems);
            
            // Redireciona para a página de pagamento externa
            if (respostaPagamento.urlPagamento) {
                navigate(respostaPagamento.urlPagamento);
            }
        } catch (erro) {
            // Em caso de erro, redireciona para página de erro
            navigate('/erro-pagamento');
        }
        */
    };

    // Mostra loading enquanto carrega
    if (isLoading) {
        return <div>Carregando...</div>;
    }

    // Renderiza a interface do carrinho
    return (
        <>
            <Header />
            <Menu />
            <div className="carrinho-container">
                {/* Cabeçalho do carrinho com título e contador de itens */}
                <div className="carrinho-header">
                    <h2>SACOLA DE COMPRAS - BR PERSONALIZADOS</h2>
                    <span className="item-count">{cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITENS'}</span>
                </div>

                <div className="carrinho-content">
                    {/* Lista de itens no carrinho */}
                    <div className="carrinho-items">
                        {cartItems.map((item) => (
                            <div key={item.nome} className="carrinho-item">
                                <img src={item.imagem} alt={item.nome} className="item-image" />
                                <div className="item-info">
                                    <h3>{item.nome}</h3>
                                    <p>Quantidade: {item.quantity}</p>
                                    <p>Preço: R$ {item.preco}</p>
                                </div>
                                <button 
                                    className="remove-button"
                                    onClick={() => handleRemoveItem(item.nome)}
                                    title="Remover item"
                                >
                                    <DeleteOutlineIcon />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Resumo do pedido com valores e botões de ação */}
                    <div className="carrinho-resumo">
                        <h3>RESUMO</h3>
                        <div className="resumo-item">
                            <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</span>
                            <span>R$ {calcularSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="resumo-total">
                            <span>Total</span>
                            <span>R$ {calcularSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="parcelamento">
                            em até 3x de R$ {(calcularSubtotal() / 3).toFixed(2)}
                        </div>

                        <button 
                            className="finalizar-compra"
                            onClick={handleFinalizarCompra}
                        >
                            FINALIZAR COMPRA
                        </button>
                        <Link to="/" className="continuar-comprando">
                            CONTINUAR COMPRANDO
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrinho; 