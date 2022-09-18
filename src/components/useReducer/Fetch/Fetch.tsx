import { Action } from '../../gitActions/types';
import { useReducer } from 'react';

const fakeApi = async ():Promise<string[]> => {
  await new Promise(resolve => setTimeout(resolve,500))
  return ["john","tom","ken"]
}
const Fetch = ():JSX.Element => {
  type Action = 
    | {type:"pending" }
    | {type:"fulfilled";payload: {users: string[]}}

  type State = {
    loading: boolean;
    users:string[]
  }
  
  const reducer = (state:State,action:Action):State => {
    switch (action.type){
      case "pending" :
        return {
          ...state,
          loading: true
        }
      case "fulfilled":{
        const {users} = action.payload
        return {
          ...state,
          loading:false,
          users
        }
      }
    }
  }

  const [{loading,users}, dispatch] = useReducer(reducer,{loading:false,users:[]})
  

  return (
    <div>
      {loading ? (<p>ロード中</p>) : (
      <ul>
        {users.map((user) => <li key={user}>{user}</li>)}
      </ul>)}
      <button onClick={async () =>{
        dispatch({type:"pending"})
        const users = await fakeApi()
        dispatch({type:"fulfilled",payload:{users}})
      }} >取得</button>
    </div>
  )
}

export default Fetch