import { useState } from "react";
function TaskItem({ task, onDelete, onToggle, onEdit }: any) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSave = () => {
        onEdit(task.id, title, description);
        setIsEditing(false);
    };
    
    return (
    <div className="table-row">
        {isEditing ? (
            <>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="input-edit"
            />
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-edit"
            />
            <span>{task.completed ? "✔️" : "❌"}</span>
            <div className="actions">
                <button className="done" onClick={handleSave}>
                Guardar</button>
                <button className="delete" onClick={() => setIsEditing(false)}>
                Cancelar</button>
            </div>
            </>
        ) : (
            <>
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.completed ? "✔️" : "❌"}</span>

            <div className="actions">
                <button className="edit" onClick={() => setIsEditing(true)}>
                Editar
                </button>
                <button className="delete" onClick={() => onDelete(task.id)}>
                Eliminar
                </button>
                <button className="done" onClick={() => onToggle(task)}>
                {task.completed ? "Deshacer" : "Completar"}
                </button>
            </div>
            </>
        )}
        </div>
    );
}

export default TaskItem;