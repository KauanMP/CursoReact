import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  };

  console.log(name);

  return (
    <div>
      <h1>Formulário</h1>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="Digite seu Email" />
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
