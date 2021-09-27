import React from 'react'
import {ACTIONS} from "./Todo_List"

export default function Todos({todo , dispatch}) {
    return (
        <div>
        <span style={{color : todo.complete ? '#AAA' :'#000'}}>{todo.name}</span>
        <button onClick={()=>dispatch(
            {type:ACTIONS.TOGGEL_TODO 
                , payload:{id:todo.id}})}>Toggle</button>  
        <button onClick={()=>dispatch(
            {type:ACTIONS.DELETE_TODO
                , payload:{id:todo.id}})}>delete</button>
        </div>
        
    )
}
