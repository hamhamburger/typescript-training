
import { Avatar } from "@nextui-org/react/types/avatar/avatar";

import React from 'react'
type Props = {
  userName: string;
  src: string;
}

const GitUserProfile = ({userName,src}:Props):JSX.Element => {
  return (
    <>
      <Avatar src={src} alt={userName} />
      <span>{userName}</span>
    </>
  )
}

export default GitUserProfile