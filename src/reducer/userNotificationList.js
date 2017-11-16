import { Record, Map } from 'immutable'

import { LOAD_USERNOTIFICATIONS, START, SUCCESS, FAIL } from '../constants'

import { recordsFromArray } from '../utils/arrays'

const UserNotification = Record({
  'id': '0',
  'name': 'Undefined',
  'date': ''
})
const defaultUserNotification = recordsFromArray(UserNotification, [])
const defaultState = new Map({
  loading: false,
  loaded: false,
  error: false,
  userNotificationList: defaultUserNotification
})

export default (state = defaultState, action) => {
  const {type, response} = action

  switch (type) {

  case LOAD_USERNOTIFICATIONS + START:
    return state
      .set('loading', true)
      .set('loaded', false)
      .set('error', false)
  case LOAD_USERNOTIFICATIONS + SUCCESS:
    return state
      .set('loading', false)
      .set('loaded', true)
      .set('error', false)
      .set('userNotificationList', recordsFromArray(UserNotification, response))
  case LOAD_USERNOTIFICATIONS + FAIL: {
    const currentState = defaultState
    return currentState
      .set('loading', false)
      .set('loaded', true)
      .set('error', true)
  }
  }
  return state
}
