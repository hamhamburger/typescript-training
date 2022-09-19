import { useReducer } from "react"
import { AppState, appStateContext } from './useAppState';
import { AppAction,dispatchContext } from './useAppStateDispatch';
import GlobalHeader from "./GlobalHeader";
import Article from "./Article";

const initialState:AppState = 
  {
    articles:[
    {
      id: "1",
      contents: "本来は API などから取得する記事の中身",
      likes: 0,
    },
    {
      id: "2",
      contents: "二つ目の記事",
      likes: 0,
    },
  ]
}


const App = ():JSX.Element => {
  const reducer = (state: AppState,action: AppAction):AppState => {
    switch(action.type){
      case "like" :{
        const { articleId } = action.payload
        return {
          ...state,
          articles: state.articles.map((article) => article.id === articleId ? 
          {...article,likes: article.likes + 1} : article
          
          )
        }
      }
    }
  }
  const [appState,dispatch] = useReducer(reducer,initialState)
  return (
    <dispatchContext.Provider value={dispatch} >
      <appStateContext.Provider value={appState}>
        <GlobalHeader />
        <Article id="1"/>
        <Article id="2"/>
      </appStateContext.Provider>
    </dispatchContext.Provider>
  )
}
export default App