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
import Modal from "./components/Modal/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (): void => {
    hideOrShowModal(true);
  };
  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar tarefa" taskList={taskList} />}
      />
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
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
