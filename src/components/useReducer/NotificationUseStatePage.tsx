import React, { useState } from 'react'
import View from './View'
import Edit from './Edit'

import { NotificationDestination,DisplayMode } from './types'



const NotificationUseStatePage = ():JSX.Element => {
  const [notifications, setNotifications] = useState<NotificationDestination[]>([])

  const isNotificationMaximum = notifications.length >= 5

  const changeNotificationDisplayMode = (
    index: number,
    displayMode: DisplayMode
  ):void => {
    const newNotifications = notifications.map(
      (notification, mindex) => {
        return index === mindex ? { displayMode, email: notification.email } : notification
      }
    )
    setNotifications(newNotifications)
  }

  const addNotification = ():void => {
    setNotifications([...notifications,{displayMode:"edit",email:""}])
  }

  const updateNotificationEmail = (
    index: number,
    e:React.ChangeEvent<HTMLInputElement>
  ):void => {
    const newNotifications = notifications.map((notification,mindex) => {
      return mindex === index ? {displayMode:notification.displayMode,email:e.target.value} : notification
      }
    )
    setNotifications(newNotifications)
  }

  const deleteNotification = (
    index:number
  ): void => {
    const newNotifications = notifications.filter((notification, mindex) => mindex !== index)
    setNotifications(newNotifications)
  }


  return (
    <div>
      {notifications.map((notification,index) => {
        if (notification.displayMode === "view") {
          return (
            <View value={notification.email} onClick={() => changeNotificationDisplayMode(index,"edit")} key={index} />
          )
        }
        else {
          return (
            <Edit
              index={index}
              value={notification.email}
              onDelete={() => deleteNotification(index)}
              onChange={(e) => updateNotificationEmail(index, e)}
              onSave={() => changeNotificationDisplayMode(index, "view")}
              key={index} />
          )
        }
      })}

        {
        isNotificationMaximum ?
           <></> : <button onClick={addNotification}>追加</button>
        }
    </div>
  )
}

export default NotificationUseStatePage