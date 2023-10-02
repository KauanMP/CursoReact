function App() {
  // 1 - Variaveis
  const name: string = "kauan";
  const age: number = 18;
  const isWorking: boolean = true;

  return (
    <div>
      <h1>React com TypeScript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
    </div>
  );
}

export default App;
