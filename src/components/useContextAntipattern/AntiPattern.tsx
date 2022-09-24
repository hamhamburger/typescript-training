import { createContext, useContext,useState } from 'react';
import Main from '../useCallback/Main';



type ValueType = { 
  [key: string]: number | undefined 
}

const context = createContext<ValueType>(undefined as never)

const Component = ({ name }: {name:string}):JSX.Element => {
  const value = useContext(context)
  console.log(name)

  return (
    <div>
      {name}:{value[name]}
    </div>
  )

}

const Main = () => {
  const [value,setValue] = useState<ValueType>({})
  console.log("Main")
  return (
    <>
      <button onClick={()=> setValue((v) => ({...v,A: (v.A ?? 0) + 1}))}>A</button>
      <button onClick={()=> setValue((v) => ({...v,B: (v.B ?? 0) + 1}))}>B</button>
      <context.Provider value={value}>
        <Component name="A" />
        <Component name="B" />
      </context.Provider>

    </>
  )
}