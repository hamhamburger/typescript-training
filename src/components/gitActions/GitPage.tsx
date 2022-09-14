import React,{useEffect,useState} from 'react'

import { GitData } from './types'
import GitActionsTable from './gitActionsTable'

const USER = "/hamhamburger"
const API_URL = "https://api.github.com/users"
const EVENTS = "/events"


const jsonToGitData = (
  userJson: { login: string; avatar_url: string },
  actionsJson: any[]
): GitData => {
  const actions: Array<{ message: string; created_at: string;}> = []

  const pushActions = actionsJson.filter((action) => action.type === "PushEvent");
  console.log(pushActions)
  pushActions.forEach(action => {
    action.payload.commits.forEach((commit: { message: string }) => {
      const newAction = { message: commit.message, created_at: action.created_at }
      actions.push(newAction);
    });
  });
  return {userName:userJson.login,src:userJson.avatar_url,actions}
};

const GitPage = (): JSX.Element => {

  const [gitData, setGitData] = useState<GitData>({actions:[],userName:"読込中です",src:""})

  useEffect(() => {
    
    
    const fetchUserData = async ():Promise<void> => {
      try {
        const userRes = await fetch(`${API_URL}${USER}`)
        const userJson = await userRes.json()
        const actionsRes = await fetch(`${API_URL}${USER}${EVENTS}`)
        const actionsJson = await actionsRes.json()
        setGitData(jsonToGitData(userJson,actionsJson))

      } catch (error) {
        setGitData({actions:[],userName:"取得に失敗しました。",src:""})
      }
      
    }
    void fetchUserData()
   
  }, [])
  

  return (
    <GitActionsTable actions={gitData.actions} userName={gitData.userName} src={gitData.src}  />
  )
}

export default GitPage