
import React,{useReducer} from 'react'

const initialState = 0

interface ActionInterface { 
  type: "increment" | "decrement" | "reset"
 }



const reducerFunc = (countState:number, action:ActionInterface):number => {
  switch (action.type) {
    case "increment":
      return countState + 1
    case "decrement":
      return countState - 1
    case "reset":
      return initialState
    default:
      return countState
  }  

}


const Counter = (): JSX.Element => {
 const [count, dispatch] = useReducer(reducerFunc,initialState)


  return (
    <>
      <div>{`Count:${count}`}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() =>dispatch({type:"reset"})}>reset</button>
    </>
  )
}

export default Counter