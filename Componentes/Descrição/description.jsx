import { useParams } from 'react-router-dom';
import data from "../../DB/produtos.json";
import 'tailwindcss/tailwind.css'; // Importa Tailwind CSS

const Description = () => {
  const { nome } = useParams();
  const product = data.find(produto => produto.nome === nome);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="description-container"> {/* Container para descrição */}
      <h2 className="text-2xl font-bold">Descrição do produto:</h2>
      <p className="text-[50px] font-bold mt-4">{product.descricao}</p> {/* Fonte de 50px e negrito */}
    </div>
  );
};

export default Description;
