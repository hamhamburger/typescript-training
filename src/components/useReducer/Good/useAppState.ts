
import { useContext } from 'react';
import { createContext } from 'react';            


export type AppState = {
    articles:Array< 
      {
        id: string
        likes:number
        content: string      
      }
    >
  }


  export const appStateContext = createContext<AppState | null>(null)

  export const useAppState = () => {
    const appState = useContext(appStateContext)
    if(appState === undefined){
      throw new Error("Providerで囲んで下さい")
    }

    return appState
  }
