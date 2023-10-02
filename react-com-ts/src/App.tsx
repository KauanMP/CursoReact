// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

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
    </div>
  );
}

export default App;
