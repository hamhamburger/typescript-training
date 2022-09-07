import { Task } from "./Types"
import React, { useState } from "react"

interface Props{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  tasks:Task[]
}
  const TaskInput = ({setTasks,tasks}:Props): JSX.Element => {
    const [inputTitle, setInputTitle] = useState<string>("")
    const [count, setCount] = useState<number>(tasks.length + 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
      setInputTitle(e.target.value)
    }

    const handleSubmit = ():void => {
      setCount(count + 1)

      const newTask: Task = {
        id: count,
        title: inputTitle,
        done: false
      }

      setTasks([newTask, ...tasks])
      setInputTitle('')
    }
      
  return (
    <div>
      <div className="inputForm">
        <div className="inner">
          <input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} className="btn is-primary">追加</button>
        </div>
      </div>
    </div>
  )
}


export default TaskInput