import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  
  const deleteTask = (id: number) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTasks(tasks.filter((t) => t.id !== id));
    });
  };

  const toggleTask = (task: Task) => {
    fetch(`http://localhost:3000/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
      });
  };

const editTask = (id: number, title: string, description: string) => {
  fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  })
    .then((res) => res.json())
    .then((updated) => {
      setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    });
};


  return (
    <div>
      <h1>Mi lista de tareas</h1>

      <TaskForm onAdd={addTask} />
      <TaskList  tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask}/>
    </div>
  );
}



export default App;