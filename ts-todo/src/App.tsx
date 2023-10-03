// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/Task/TaskForm";
import TaskList from "./components/Task/TaskList";

// Css
import styles from "./App.module.css";

// Interface
import { ITask } from "./interfaces/Task";

// States
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer ?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
