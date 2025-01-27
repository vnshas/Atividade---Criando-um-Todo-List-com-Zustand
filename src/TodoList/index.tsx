import { useFormStore } from "../stores/useFormStore"
import { TodoCard } from "./TodoCard"

export const TodoList = () => {
    
    const {todoList} = useFormStore((store) => store)

    return(
        <ul>
            {todoList.map(task =>(
               <TodoCard  task={task}/>
            ))}
        </ul>
    )
}