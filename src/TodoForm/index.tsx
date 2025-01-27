import { useForm } from "react-hook-form"
import {useFormStore} from "../stores/useFormStore"

export const TodoForm = () => {
    
    type Profile = {
        name: "string"
        id:string
    }

    const {addTask,todoList} = useFormStore((store) => store)
    
    const {handleSubmit ,register} = useForm<Profile>()

    const submit = handleSubmit((formData) => {
      addTask(formData)
      console.log(todoList)
    })
    return(
       <form onSubmit={submit}>
        <input type="text" placeholder="Digite sua tarefa." {...register("name")} />
        <button type="submit">Criar Tarefa</button>
       </form>
    )
}