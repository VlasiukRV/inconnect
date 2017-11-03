import { LOAD_USERNOTIFICATIONS  } from '../constants'

export function loadUserNotificationsList() {
    return {
        type: LOAD_USERNOTIFICATIONS,
        callAPI: '/api/user/notifications'
    }
}