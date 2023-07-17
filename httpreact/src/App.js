import './App.css';

import { useState } from "react"

// 4 - Custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {

  // 4 - custom
  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - Adicionando com o POST

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct])
    // setName("");
    // setPrice("");


    // 5 - refatorando post
    httpConfig(product, "POST")
  };

  const deleteProduct = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading ? (<p>Carregando dados...</p>)
        : (
          <ul className="listProducts">
            {items && items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: ${product.price}
                <button 
                className="buttonDelete" 
                type="button" 
                value="X" 
                onClick={() => deleteProduct(product.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {!loading ?
            (<input type="submit" value="Criar" />)
            : (
            <input type="submit" disabled value="Aguarde" />
            )}
        </form>
      </div>
    </div>
  );
}

export default App;
