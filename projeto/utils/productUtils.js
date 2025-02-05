import produtos from '../DB/produtos.json';

export const getProductsByCategory = (category) => {
    return produtos.filter(produto => produto.categoria === category);
};

export const getProductByName = (name) => {
    return produtos.find(produto => produto.nome === name);
};

export const getProductImage = (productName) => {
    const product = getProductByName(productName);
    return product ? product.imagem : null;
}; 