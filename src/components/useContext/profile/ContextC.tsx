import { useContext } from "react";
import { UserContext,HobbyContext } from "./ContextMain";

const ContextC = ():JSX.Element => {
  const user = useContext(UserContext)
  const hobby = useContext(HobbyContext)
  return(
    <p>{`${user.name}${user.age}です 趣味は${hobby}です`}</p>
  )
}

export default ContextC