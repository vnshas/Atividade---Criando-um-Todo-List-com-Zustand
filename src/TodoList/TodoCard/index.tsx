import { Itask, useFormStore } from "../../stores/useFormStore"

interface ItaskCardProps {
    task: Itask
}

export const TodoCard = ({task}: ItaskCardProps) => {
    
    const removeTask = useFormStore((store) => store.removeTask)

    return (
        <li key={task.id}>
        <h3>{task.name}</h3>
        <button onClick={() => removeTask(task.id)}>Remover Tarefa</button>
        </li>
    )
}