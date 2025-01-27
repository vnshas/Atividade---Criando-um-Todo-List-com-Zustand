import { create } from "zustand";


export interface Itask {
    name:string,
    id:string,
    
}

interface ItaskStore {
    todoList: Itask[],
    addTask: (newTask : Itask) => void,
    removeTask: (taskId:string) => void,

}

export const useFormStore = create<ItaskStore>((set) => ({
    todoList: [],
    addTask: (newTask) => set(({todoList}) => {
        const task = {...newTask, id:crypto.randomUUID()}
        const newTaskList = [...todoList, task]
        return {todoList: newTaskList}
    }),
    removeTask: (taskId) => set(({todoList}) =>{
        const newTaskList = todoList.filter(currentTask => currentTask.id !== taskId)
        return {todoList: newTaskList}
    })

}))

