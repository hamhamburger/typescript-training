import React,{ createContext, useContext,useState  } from 'react';


type User = {
  id: string
  name: string
}

type authContextType = {
  user: User | null;
  signIn: () => void
  signUp: () => void
  signOut: () => void
}

function betterCreateContext<ContextType>():any {
  const context = createContext<ContextType | undefined>(undefined)
  const betterUseContext = ():any => {
    
    const c = useContext(context)
    
    console.log(context)
    console.log(c)
    if(!c) throw new Error("betterUseContext must be inside a Provider with a value ")
    return c
  } 
  return [betterUseContext,context.Provider] as const
}

const [useAuth,SetAuthProvider] = betterCreateContext<authContextType>()

const AuthProvider = (props: { children: JSX.Element | JSX.Element[] }):JSX.Element =>  {
  const auth = useAuth()
  return <SetAuthProvider value={auth} >{props.children}</SetAuthProvider>
}

const useAuthContext = (): authContextType => {
  const [user,setUser] = useState<User | null>(null);

  const signIn = (): void => {
    console.log("sign in")
  }
  const signUp = ():void => {
    console.log("sign up")
  }
  const signOut = ():void => {
    console.log("sign out")
  }

  return {user,signIn,signUp,signOut}
}

export const App = ():JSX.Element => {
  const auth = useAuth()
  return(
    <AuthProvider>
      <button onClick={() => auth.signUp()}>サインアップ</button>
      <button onClick={() => auth.signIn()}>ログイン</button>
    </AuthProvider>
  )


}