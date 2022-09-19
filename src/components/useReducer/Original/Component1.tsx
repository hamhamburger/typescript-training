import { useContext } from 'react';
import appContext from './store';
const Component1 = ():JSX.Element => {
  const state = useContext(appContext) 
  return (
    <div>{state}</div>
  )

}



export default Component1