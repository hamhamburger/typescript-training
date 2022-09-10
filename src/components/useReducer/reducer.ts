import { type } from "os";
import { DisplayMode, NotificationDestination } from "./types";


type Actions =
  {
    type: "changeDisplayMode"
    payload: { index: number; displayMode: DisplayMode}
  }
  | { type: "newNotification" }
  | { type: "updateNotification"; payload: { index: number;  value: string} }
  | { type: "fetchAllNotification"; payload: { values: string } }
  | { type: "deleteNotification"; payload: { index: number } }
  
export const reducer = (
  state: NotificationDestination[],
  action: Actions
): NotificationDestination[] => {
    switch (action.type) {
      case "changeDisplayMode": {
        const { index, displayMode } = action.payload
        return state.map((notification, mindex) => {
          return mindex === index ? {email: notification.email,displayMode} : notification
        })
      }
      case "newNotification": {
        return [...state,{displayMode:"edit",email:""}]
      }
      case ""
    }
  }