import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageConfig from '../../config/images';
import { FiSearch } from 'react-icons/fi';
import './Pesquisar.css';
import { useCart } from '../Carrinho/CarrinhoContext';

function Pesquisar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.length < 2) return;

        let foundProduct = null;
        
        // Busca em todas as categorias e produtos
        Object.values(imageConfig.paginas).forEach(categoria => {
            Object.values(categoria.tipos).forEach(tipo => {
                tipo.produtos.forEach(produto => {
                    if (
                        produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        produto.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        produto.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                    ) {
                        foundProduct = produto;
                    }
                });
            });
        });

        if (foundProduct) {
            navigate(`/produto/${encodeURIComponent(foundProduct.nome)}`);
            setSearchTerm(''); // Limpa o campo após a pesquisa
        } else {
            alert('Produto não encontrado');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearchInput = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.length < 2) {
            setSearchResults([]);
            return;
        }

        const results = [];
        
        // Busca em todas as categorias e produtos
        Object.values(imageConfig.paginas).forEach(categoria => {
            Object.values(categoria.tipos).forEach(tipo => {
                tipo.produtos.forEach(produto => {
                    if (
                        produto.nome.toLowerCase().includes(term) ||
                        produto.categoria.toLowerCase().includes(term) ||
                        produto.tags?.some(tag => tag.toLowerCase().includes(term))
                    ) {
                        results.push(produto);
                    }
                });
            });
        });

        setSearchResults(results);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchInput}
                onKeyPress={handleKeyPress}
                className="search-input"
            />
            <button 
                className="search-button"
                onClick={handleSearch}
                aria-label="Pesquisar"
            >
                <FiSearch />
            </button>
            {searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map((result, index) => (
                        <div 
                            key={index} 
                            className="search-result-item"
                            onClick={() => navigate(`/produto/${encodeURIComponent(result.nome)}`)}
                        >
                            <img src={result.imagem} alt={result.nome} />
                            <span>{result.nome}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Pesquisar; 