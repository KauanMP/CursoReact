import './index.css';
import { useFetch } from '../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const { prdtId } = useParams();

  const url = 'http://localhost:3000/products/' + prdtId;
  const { data: product, loading, error } = useFetch(url);

  console.log(product)
  return (
    <>
      <p>ID do Produto: {prdtId}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
