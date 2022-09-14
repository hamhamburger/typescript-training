import { Avatar, Box } from '@mui/material';
import React from 'react'
type Props = {
  userName: string;
  src: string;
}

const GitUserProfile = ({userName,src}:Props):JSX.Element => {
  return (
    <>
      <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
        <Avatar src={src} alt={userName} />
        <span>{userName}</span>
      </Box>
    </>
  )
}

export default GitUserProfile