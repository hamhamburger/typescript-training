import {
  Component,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type ValueType = {
  [key:string]: Dispatch<SetStateAction<number | undefined>>
};

const context = createContext<ValueType>(undefined as never)

const Component = ({name}:{name:string}):JSX.Element => {
  console.log(name)
  const [value,setValue] = useState<number>()
  const dispatches = useContext(context)
  useEffect(() => {
    dispatches[name] = setValue
  
    return () => {
      delete dispatches[name]
    }
  }, [name])
  

  return (
    <div>
      {name} : {value}
    </div>
  )
}

const Main = ():JSX.Element => {
  console.log("main")
  const dispatches =useRef<ValueType>({}).current
  return (
    <div>
      <button onClick={() => dispatches.A?.((v) => (v ?? 0) + 1)}>A</button>
      <button onClick={() => dispatches.B?.((v) => (v ?? 0) + 1)}>B</button>
      <context.Provider value={dispatches}>
        <Component name="A" />
        <Component name="B" />

      </context.Provider>
    </div>
  )
}