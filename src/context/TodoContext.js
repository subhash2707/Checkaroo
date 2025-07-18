import { createContext,useContext } from "react";
export const TodoContext=createContext({
    //component koi bhi ho values yhi se lunga
    todos:[
    {
    id:1,
    todo:"Todo msg",
    completed: false,
}[]
],
addTodo:(todo) => {},
updatedTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContext)
}

//export provider
export const Todopovider=TodoContext.Provider;