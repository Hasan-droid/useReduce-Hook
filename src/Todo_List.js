'use strict'
import { useReducer, useState } from "react";
import Todos from "./todos";

 export const  ACTIONS={

    ADD_TODO:'add-to-do',
    TOGGEL_TODO:'toggel-to-do',
    DELETE_TODO:'delete-to-do'

}

 function reducer(toDo , action){

    switch(action.type){
        case ACTIONS.ADD_TODO:
          return  [...toDo , newTodod(action.payload.name)]
          case ACTIONS.TOGGEL_TODO:
       return toDo.map(e =>{
            if(e.id == action.payload.id)
            {
                return {...e , complete:!e.complete}
            }
            
            return e
          
        })

        case ACTIONS.DELETE_TODO:
            
            return toDo.filter(e =>(
                console.log(e.id),
                e.id !== action.payload.id
            
                
            )
            )

            default:return toDo
    }

}

function newTodod(name){
    console.log("name" , name)
    return{id : Date.now() , name:name , complete:false}
}

function Todo_List(){

    const [name , setName]=useState('')

const [todos , dispatch]=useReducer(reducer , [])
// console.log(todos)
 let handleSubmit=(e)=>{
     dispatch({type:ACTIONS.ADD_TODO , payload:{name : name}})
    e.preventDefault();
    setName('')
 }

 

return (
   
    <>
  
  <br/><br/> 
  <form onSubmit={handleSubmit}>
  <input type="text" value={name} onChange={e=>setName(e.target.value)} ></input>
  </form>
  
  {
      todos.map(items=>{
          console.log(items)
        return  <><br/><Todos key={items.id} todo={items} dispatch={dispatch}/></>
      })
  }
    </>
 
)

}


export default Todo_List ;