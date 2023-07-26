import "./index.css";
import ChangeCounter from "../../components/ChangeCounter";
// import { useContext } from "react";
// import { CounterContext } from "../../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "./../../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h2 style={{ color: color }}>Page destined to Home</h2>
      <p>Valor do contador {counter}</p>
      {/* 3 - Alterar o valor do contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo */}
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Blue</button>
    </div>
  );
};

export default Home;
