import "./App.css";
import MyComponent from "./components/MyComponent";
import Challenge from './components/Challenge';
import Title from "./components/Title";

function App() {
  const n = 15;

  const redTitle = true;

  const cars = [
    {id: 1, brand: "Volswagen", name: "Jetta", price: 215.230, year: 2022},
    {id: 2, brand: "Fiat", name: "Uno", price: 53.150, year: 2020},
    {id: 3, brand: "Audi", name: "Audi A3", price: 79.500, year: 2015},
]

  return (
    <div className="App">
      {/* Global css */}
      <h1>React com CSS</h1>
      {/* Component css */}
      <p>Este parágrafo pegou estilo do componente!</p>

      <MyComponent />
      {/* Inline css */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento foi estilizado inline
      </p>
      {/* Dinâmico css */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 2
      </h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      {/* CSS modules */}
      <Title />
      <h1 className="title">Este não recebe título do CSS modules</h1>
      <div>
        <h1 className='title_cars'>Lista de Carros</h1>
              {cars.map((car) => (
                <Challenge 
                key={car.id}
                brand={car.brand}
                name={car.name}
                price={car.price}
                year={car.year}
                />
              ))}
      </div>
    </div>
  );
}

export default App;
