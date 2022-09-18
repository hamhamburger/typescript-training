import { useState, FormEvent } from 'react';
import { useTodosDispatch } from '../TodoContext';


const TodoForm = ():JSX.Element => {
  const [value, setValue] = useState<string>("")
  const dispatch = useTodosDispatch()

  const onSubmit = (e: FormEvent):void => {
    e.preventDefault();
    if(value === "") {
      alert("空です")
      return 
    }
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