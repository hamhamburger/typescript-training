import { jsx } from "@emotion/react";
import { Children, createContext,Dispatch ,ReactNode, useReducer ,useContext} from "react";


export type Todo = {
  id:number;
  text: string;
  done: boolean;
}

type TodoState = Todo[];


const TodoStateContext = createContext<TodoState | undefined>(undefined)

type Action = 
| {type: 'CREATE'; text:string}
| {type: "TOGGLE"; id: number}
| {type: 'REMOVE'; id:number};


type TodoDispatch = Dispatch<Action>

const TodoDispatchContext = createContext<TodosDispatch | undefined>(undefined)


const todosReducer = (state: TodoState,action: Action):TodoState => {
  switch(action.type) {
    case  "CREATE":{
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1
      return state.concat({
        id:nextId,
        text:action.text,
        done:false

      })
    }
    case "TOGGLE":{
      return state.map(todo => todo.id === action.id ? 
        {...todo,done: !todo.done} : todo )


    }
    case "REMOVE":{
      return state.filter(todo => todo.id !== action.id)
    }

    default:
      throw new Error  
  }
}

const TodosContextProvider = ({children}:{children : ReactNode }):JSX.Element => {
  const [todos,dispatch] = useReducer(todosReducer,[
    {
      id:1,
      text:"context API",
      done:true
    }
  ])



return (
  <TodoDispatchContext.Provider value={dispatch}>
    <TodoStateContext.Provider value={todos}>
      {children}
    </TodoStateContext.Provider>
  </TodoDispatchContext.Provider>

)
}

export default TodosContextProvider

export const useTodosState = () => {
  const state = useContext(TodoStateContext)
  if(!state) throw new Error('TodosProvider not found')
  return state
}

export const useTodosDispatch = () => {
  const dispatch = useContext(TodoDispatchContext)
  if(dispatch === undefined) throw new Error('TodoProviderNotFound')
  return dispatch
}