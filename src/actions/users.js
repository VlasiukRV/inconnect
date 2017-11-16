import { LOAD_USER, LOGOUT_USER } from '../constants'

import { loadUserSecurityScore } from './securityScore'
import { loadUserNotificationsList } from './userNotifications'
import { loadInsuranceList } from './insurance'
import { loadUserDeviceList } from './devices'

export function logInUser(callBack) {
  return function(dispatch) {
    /*$.ajax().then{*/
    dispatch(doLogInUser())
    setTimeout(function() {
      dispatch(updateContent())
      if (callBack) {
        callBack()
      }
    }, 10);

  /*}*/
  }
}
export function logOutUser() {
  return function(dispatch) {
    dispatch(doLogOutUser())
    dispatch(updateContent())
  }
}

function doLogOutUser() {
  return {
    type: LOGOUT_USER
  }
}

function doLogInUser() {
  return {
    type: LOAD_USER,
    callAPI: '/api/user'
  }
}

function updateContent() {
  return function(dispatch) {
    dispatch(loadUserSecurityScore())
    dispatch(loadUserNotificationsList())
    dispatch(loadInsuranceList())
    dispatch(loadUserDeviceList())
  }
}