import React,{useState} from 'react'

type Props = {
  addTodo: (s:string) => void
}

const InputWithButton = ({addTodo}:Props):JSX.Element => {


  const [input, setInput] = useState<string>("")
  const updateInput = (input:string):void => setInput(input)
  const handleAddTodo = ():void => {
    addTodo(input)
    setInput("")
  }

  return (
    <div>
      <input 
        onChange={(e)=> updateInput(e.target.value)} 
        value={input} 
      />
      <button onClick={handleAddTodo}>
        追加
      </button>
    </div>
  )
}

export default InputWithButton