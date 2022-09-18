import { useState, FormEvent } from 'react';
import { useTodosDispatch } from '../TodoContext';


import React from 'react'

const TodoForm = () => {
  const [value, setValue] = useState<string>("")
  const dispatch = useTodosDispatch()

  const onSubmit = (e: FormEvent):void => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value
    })
    setValue('')
  }

  

  return (
    <form onSubmit={onSubmit}>
      <input 
        onChange={e => setValue(e.target.value)}
        value={value}
        />
      <button type="submit">追加</button>
    </form>
  )
}

export default TodoForm