function TaskItem({ task, onDelete, onToggle }: any) {
    return (
        <div className="table-row">
        <span>{task.title}</span>
        <span>{task.description}</span>
        <span>{task.completed ? "✔️" : "❌"}</span>

        <div className="actions">
            <button className="delete" onClick={() => onDelete(task.id)}>
            Borrar
            </button>

            <button className="done" onClick={() => onToggle(task)}>
            {task.completed ? "UNDO" : "Terminado"}
            </button>
        </div>
        </div>
    );
}

export default TaskItem;