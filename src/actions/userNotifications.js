import { LOAD_USERNOTIFICATIONS } from '../constants'

export function loadUserNotificationsList() {
  return {
    type: LOAD_USERNOTIFICATIONS,
    checkAuthenticated: true,
    callAPI: '/api/user/notifications'
  }
}