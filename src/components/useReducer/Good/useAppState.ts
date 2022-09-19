
import { createContext,useContext } from 'react';



export type AppState = {
    articles:Array< 
      {
        id: string
        likes:number
        contents: string      
      }
    >
  }


  export const appStateContext = createContext<AppState | null>(null)

  export const useAppState = ():AppState => {
    const appState = useContext(appStateContext)
    if(appState === null){
      throw new Error("Providerで囲んで下さい")
    }

    return appState
  }
