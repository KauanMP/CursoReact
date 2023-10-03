import styles from "./App.module.css";
import Footer from "./components/interfaces/Footer/Footer";
import Header from "./components/interfaces/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Conteúdo...</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
