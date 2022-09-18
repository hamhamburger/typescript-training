import React from 'react'
import TodoList from './TodoList'
import TodosContextProvider from '../TodoContext'
import TodoForm from './TodoForm'

const ContextTodoMain = ():JSX.Element => {
  return (
    <div>
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
      
        
    </div>
  )
}

export default ContextTodoMain