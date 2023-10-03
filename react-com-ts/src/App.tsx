// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

function App() {
  // 1 - Variaveis
  const name: string = "kauan";
  const age: number = 18;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  const mySecondtext: textOrNull = null;

  // mySecondtext = "text";

  const testandoFixed: fixed = "Isso";

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
      {myText && <p>Tem texto na variável</p>}
      {mySecondtext && <p>Tem texto na variável</p>}
    </div>
  );
}

export default App;
