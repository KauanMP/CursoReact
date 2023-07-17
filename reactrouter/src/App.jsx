import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Rotas
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
