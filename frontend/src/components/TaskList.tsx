import TaskItem from "./TaskItem";
import "./Tabla.css";

function TaskList({ tasks, onDelete, onToggle }: any) {
    return (
        <div className="table">
        <div className="table-header">
            <span>Título</span>
            <span>Descripción</span>
            <span>Estado</span>
            <span>Acciones</span>
        </div>

        {tasks.map((task: any) => (
            <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            />
        ))}
        </div>
    );
    }

export default TaskList;