import "./index.css";
import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>Page destined to Home</h2>
      <p>Valor do contador {counter}</p>
    </div>
  );
};

export default Home;
