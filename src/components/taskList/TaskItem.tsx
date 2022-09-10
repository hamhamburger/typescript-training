import {Task} from "../Types"
interface Props{
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task:Task) => void
}


const TaskItem = ({task,handleDone,handleDelete}:Props):JSX.Element=> {
  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
        <span>{task.title}</span>
      </label>
      <button
        onClick={() => handleDelete(task)}
        className="btn is-delete"
      >削除</button>
      </li>
  )
}

export default TaskItem