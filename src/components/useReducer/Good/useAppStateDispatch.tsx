import { createContext, useContext } from 'react';



export type AppAction = {
  type: "like"
  payload:{
    articleId:string
  }
}

export const dispatchContext  = createContext<React.Dispatch<AppAction> | null>(
  null
)

export const useAppStateDispatch = ():React.Dispatch<AppAction> => {
  const dispatch = useContext(dispatchContext)
  if(dispatch == null){
    throw new Error("囲んで下さい")
  }

  return dispatch
}