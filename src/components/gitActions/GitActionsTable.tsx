import React from 'react'
import GitUserProfile from "./GitUserProfile"
import {Action} from "./types"


type Props = {
  actions: Action[];
  src: string;
  userName: string;
}

const GitActionsTable = ({actions,src,userName}:Props):JSX.Element => {
  return (
    <GitUserProfile userName={userName} src={src} />
  )
}

export default GitActionsTable