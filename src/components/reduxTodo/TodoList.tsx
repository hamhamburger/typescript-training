import { connect } from 'react-redux'
import React from 'react'

const TodoList = ({todos}) => {
  <ul>
    {todos !== undefined && todos.length > 0
    ? todos.map((todo,index) => {
        return <TodoItem key={todo.id} todo={todo} />
    })
    : "タスクがありません"
  }
  </ul>
}

const mapStateToProps = (state) => {
  const {visibilityFilter} = state
  const todos = getTodosByVisibilityFilter(state,visibilityFilter)
  return {todos}
}

export default connect(mapStateToProps)(TodoList)