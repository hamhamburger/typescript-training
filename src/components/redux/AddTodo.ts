import { createAction,nanoid } from '@reduxjs/toolkit'

{ 
   const increment = createAction<number | undefined>('counter/increment')

  let action = increment()

  action = increment(3)

}

{
  const addTodo = createAction('todos/id',(text:string) => {
    return{
      payload:{
        text,
        id: nanoid(),
        createdAt: new Date().toString()
      }
    }
  })

  console.log(addTodo("Write doc"))
}

