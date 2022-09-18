import React, { useContext } from 'react'
import TodoItem from './TodoItem';
import { Todo, useTodosState } from '../TodoContext'




const TodoList = ():JSX.Element => {
  const todos = useTodosState()

  return (

    <div>
      {todos.map((todo) => <TodoItem key={todo.text} todo={todo} />)}
      </div>

  )
}

export default TodoList