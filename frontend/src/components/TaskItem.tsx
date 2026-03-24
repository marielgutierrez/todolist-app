type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

function TaskItem({ task }: { task: Task }) {
    return (
        <li>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
        <span>{task.completed ? "Si" : "No"}</span>
        </li>
    );
}

export default TaskItem;