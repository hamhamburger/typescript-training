import React, { useReducer} from 'react'
import View from './View'
import Edit from './Edit'

import { NotificationDestination } from './types'
import { reducer } from './reducer'

const initialState:NotificationDestination[] = []

const NotificationUseStatePage = ():JSX.Element => {
  const [notifications, dispatch] = useReducer(reducer,initialState)
  const isNotificationMaximum = notifications.length >= 5



  return (
    <div>
      {notifications.map((notification,index) => {
        if (notification.displayMode === "view") {
          return (
            <View
              value={notification.email}
              onClick={() =>
                dispatch({
                  type: "changeDisplayMode",
                  payload:{index,displayMode:"edit"}
                })
               }
              key={index} />
          )
        }
        else {
          return (
            <Edit
              index={index}
              value={notification.email}
              onDelete={() =>
                dispatch({
                  type: "deleteNotification",
                  payload:{ index}
              })}
              onChange={(e) => dispatch({
                type: "updateNotification",
                payload: { index, value: e.target.value }
              }
              )}
              onSave={() => dispatch({
                type: "changeDisplayMode",
                payload:{index,displayMode:"view"}
              })}

              key={index} />
          )
        }
      })}

        {
        isNotificationMaximum ?
          <></> : <button onClick={() => {
            dispatch({
              type: "addNotification",
            })
           }}>追加</button>
        }
    </div>
  )
}

export default NotificationUseStatePage

