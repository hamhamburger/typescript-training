import React from 'react'
import { connect } from 'react-redux'
import toggleTodo
type Props = {
  todo:Todo,
  toggleTodo:(id:number) => void
}
const TodoItem = ({todo,toggleTodo}:Props):JSX.Element => {
  return (
  <li onClick={()=> toggleTodo(todo.id)}>
    {todo?.completed ? "✔" : "❐"}
    <span>
      {todo?.content}
    </span>

  </li>)
}

export default connect(null,{toggleTodo})(TodoItem)