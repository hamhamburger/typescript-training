import { useContext, useState,useReducer} from 'react';
import Component1 from './Component1';
import appContext from './store';
import { reducer } from '../reducer';

const App = ():JSX.Element => {
  const reducer = (state: number,action):number => {
    switch(action.type){
      case "increment":
        return state + 1
      default :
        return state
    }
  } 
  const [state,dispatch] = useReducer(reducer,0)

  

  
  return (
    <appContext.Provider value={state} >
      <Component1 />
      <button onClick={()=> dispatch({type:"increment"})} >increment</button>
    </appContext.Provider>


  )
}
export default App