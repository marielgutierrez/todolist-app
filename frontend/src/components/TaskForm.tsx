import { useState } from "react";
import "./TaskForm.css";

type Props = {
    onAdd: (task: any) => void;
    };

    function TaskForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
        })
        .then((res) => res.json())
        .then((data) => {
            onAdd(data);
            setTitle("");
            setDescription("");
        });
    };

    return (
        
    <form onSubmit={handleSubmit} className="form">
        <input
        className="input"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input
        className="input"
        placeholder="Agrega una descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button className="button">Agregar</button>
    </form>
    );
}

export default TaskForm;