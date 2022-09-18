

import React from 'react'
import { Todo, useTodosDispatch } from '../TodoContext'

type Props = {
  todo: Todo
}
const TodoItem = ({todo}:Props):JSX.Element => {
  const dispatch = useTodosDispatch()
  const onToggle = ():void => {
    dispatch({type:"TOGGLE",id:todo.id})
  }

  const onRemove = ():void => {
    dispatch({type:"REMOVE",id:todo.id})
  }
  return (
    <li>
      <span>{todo.done ? "✔" : "❐"}</span>
      <span onClick={onToggle}>{todo.text}</span>
      <span onClick={onRemove}>(X)</span>
    </li>
  )
}

export default TodoItem