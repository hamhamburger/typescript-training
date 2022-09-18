import {createContext, useState} from 'react'
import Context from './ContextA'
import { User } from './types'

export const UserContext = createContext<User>({name:"",age:""})
export const HobbyContext = createContext("")


const ContextMain = ():JSX.Element => {
  const [user, setUser] = useState({
    name:"John",
    age:"30"
  })
  const [hobby, setHobby] = useState("キャンプ")

  return (
    <div className='Main'>
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <Context />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default ContextMain