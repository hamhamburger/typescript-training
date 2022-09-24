import  { useState,useCallback,memo } from 'react';
const Main = ():JSX.Element => {
  const [state,setState] = useState<number>(0)

  const add = useCallback(():void => {
    setState((prev) => prev + 1)
  },[setState])

  const decrement = ():void => {
    setState((prev) => prev - 1)
  }
  

  console.log("main rendered")
  return (

    <div>
      <Header />
      <div>{state}</div>
      <Button onClick={add}>add</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  )
}
export default Main





// eslint-disable-next-line react/display-name
const Header = memo(() => {
  console.log("header rendered")
  return (
    <div>Header</div>
  )
})

// eslint-disable-next-line react/display-name
const Button = memo(({onClick}) => {
  console.log("button rendered")
  return (
    <button onClick={onClick}>Click</button>
  )
})



