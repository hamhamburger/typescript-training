import { DisplayMode, NotificationDestination } from "./types";


type Actions =
  {
    type: "changeDisplayMode"
    payload: { index: number; displayMode: DisplayMode}
  }
  | { type: "addNotification" }
  | { type: "updateNotification"; payload: { index: number;  value: string} }
  | { type: "fetchAllNotification"; payload: { values: string[] } }
  | { type: "deleteNotification"; payload: { index: number } }
  
export const reducer = (
  state: NotificationDestination[],
  action: Actions
): NotificationDestination[] => {
  switch (action.type) {

      case "changeDisplayMode": {
        const { index, displayMode } = action.payload
        return state.map((notification, mindex) => {
          return mindex === index ? { email: notification.email, displayMode } : notification
        })
    }
      
      case "addNotification": {
        return [...state, { displayMode: "edit", email: "" }]
      }
      case "updateNotification":{
        const { index, value } = action.payload
        return state.map((notification,mindex) => {
          return mindex === index ? {displayMode:notification.displayMode,email:value} : notification
        })

     }
    case "fetchAllNotification": {
      const { values } = action.payload
      const newState: NotificationDestination[] = values.map((v) => {
        return {
          displayMode: "view",
          email: v
        }
      })
      return newState
      }
      
      
      case "deleteNotification": {
        const newState: NotificationDestination[] = state.filter(
          (notification,index) => action.payload.index !== index
        )
        return newState
    
      }

  
  
  }
}
