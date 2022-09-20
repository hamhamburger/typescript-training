import  { useState,useCallback,memo } from 'react';
const Main = ():JSX.Element => {
  const [state,setState] = useState<number>(0)
  useCallback(
    () => {
      console.log('useCallback')
      return state * 2
    },
    [state],
  )


  const add = useCallback(():void => {
    setState(state + 1)
  },[state,setState])
  

  console.log("main rendered")
  return (

    <div>
      <Header />
      <div>{}</div>
      <Button onClick={add}>add</Button>
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



