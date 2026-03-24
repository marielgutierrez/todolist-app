import TaskItem from "./TaskItem";

function TaskList({ tasks }: any) {
    return (
        <ul>
        {tasks.map((task: any) => (
            <TaskItem key={task.id} task={task} />
        ))}
        </ul>
    );
}
export default TaskList;