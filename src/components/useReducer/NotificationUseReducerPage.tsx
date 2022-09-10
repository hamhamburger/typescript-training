// import React, { useReducer} from 'react'
// import View from './View'
// import Edit from './Edit'

// import { DisplayMode,NotificationDestination } from './types'


// const initialState:NotificationDestination[] = []

// const NotificationUseStatePage = ():JSX.Element => {
//   const [notifications, dispatch] = useReducer(reducer,initialState)
//   const isNotificationMaximum = notifications.length >= 5




//   return (
//     <div>
//       {notifications.map((notification,index) => {
//         if (notification.displayMode === "view") {
//           return (
//             <View value={notification.email} onClick={() => changeNotificationDisplayMode(index,"edit")} key={index} />
//           )
//         }
//         else {
//           return (
//             <Edit
//               index={index}
//               value={notification.email}
//               onDelete={() => deleteNotification(index)}
//               onChange={(e) => updateNotificationEmail(index, e)}
//               onSave={() => changeNotificationDisplayMode(index, "view")}
//               key={index} />
//           )
//         }
//       })}

//         {
//         isNotificationMaximum ?
//            <></> : <button onClick={addNotification}>追加</button>
//         }
//     </div>
//   )
// }

// export default NotificationUseStatePage

export{}