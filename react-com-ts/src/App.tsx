// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";

function App() {
  // 1 - Variaveis
  const name: string = "kauan";
  const age: number = 18;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div>
      <h1>React com TypeScript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="João" />
      <Destructuring
        title="Primeiro Post"
        content="Algum conteudo"
        commentsQty={6}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo Post"
        content="Algum conteudo"
        commentsQty={2}
        tags={["ts", "js", "c#", "mongoDb"]}
        category={Category.JS}
      />
      <State />
    </div>
  );
}

export default App;
