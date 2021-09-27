import { useReducer } from "react";

const ACTIONS={
    INCREMENT : 'increment',
    DECREMENT:'decrement'
}

function reducer(state , action)
{   switch(action){
    case ACTIONS.INCREMENT :
    return{count : state.count +1}
    case ACTIONS.DECREMENT:
       return  {count:state.count -1}
        default:
            return state
}
   
}

function Counter(){

    const [state , dispatch]=useReducer(reducer , {count : 0})

   function increment(){
         dispatch( ACTIONS.INCREMENT);
   }

   function decrement(){
          dispatch(ACTIONS.DECREMENT);
   }

    return(
        <>
       
        <button onClick={increment}>+</button>
        <span>{state.count}</span>
        <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter;