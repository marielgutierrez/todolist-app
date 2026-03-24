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

  return (
    <div>
      <h1>Lista de tareas</h1>

      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   fetch("http://localhost:3000/api/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ text }),
  //   })
  //     .then((res) => res.json())
  //     .then((newTask) => {
  //       setTasks([...tasks, newTask]);
  //       setText("");
  //     });
  // };


export default App;