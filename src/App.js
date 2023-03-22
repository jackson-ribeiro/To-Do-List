import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [notification, setNotification] = useState("");

  const handleAddTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setNotification({
      id: id,
      text: "Tem certeza que deseja excluir a tarefa?",
    });
  };
  
  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== notification.id);
    setTasks(updatedTasks);
    setNotification("");
  };
  
  const handleCancelDelete = () => {
    setNotification("");
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma tarefa..."
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
      {notification && (
        <div className="notification">
          <p>{notification.text}</p>
          <div className="button-container">
            <button onClick={handleConfirmDelete}>Sim</button>
            <button onClick={handleCancelDelete}>Não</button>
            </div>
          </div>
      )}
    </div>
  );
}

export default App;