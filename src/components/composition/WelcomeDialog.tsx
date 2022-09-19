import { jsx } from "@emotion/react"

type Props ={
  left: JSX.Element
  right: JSX.Element
  
}

const WelcomeDialog = ({left,right}:Props):JSX.Element => {
  
  return (
    <div>
      <div>
        <div>{left}</div>
      </div>
      <div>
        <div>{right}</div>
      </div>
    </div>
  )
}
export default WelcomeDialog


const Main = ():JSX.Element =>{
  const left = <div>left</div>
  const right = <div>right</div>
  
  
  return (
    <WelcomeDialog left={left} right={right}/>
  )
}