import React from 'react'
import GitUserProfile from "./GitUserProfile"
import {Action} from "./types"
import { Box } from '@mui/material'

type Props = {
  actions: Action[];
  src: string;
  userName: string;
}

const GitActionsTable = ({ actions, src, userName }: Props): JSX.Element => {
  return (
    <Box>
      <GitUserProfile userName={userName} src={src} />
      {actions.map((action) => {
        return (
          <Box key={action.message}>
            <span>{action.message}</span>
            <span>{action.created_at}</span>
          </Box>
        )

      }
      )}
    </Box>
  )
}

export default GitActionsTable