import TaskInput from "./TaskInput"
import TaskList from "./TaskList"
import { Task } from "./Types"
import { useState } from "react"
const initialTasks: Task[] = [
  {id:0,title:"最初に",done:false},
]
export const TaskPage = (): JSX.Element => {
  const [tasks, setTasks] = useState(initialTasks)
  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskInput setTasks={setTasks} tasks={tasks} />
    </div>)
}
