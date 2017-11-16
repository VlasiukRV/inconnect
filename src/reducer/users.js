import { Record, Map } from 'immutable'

import { LOGOUT_USER, LOAD_USER, START, SUCCESS } from '../constants'

import { getFirstRecordFromArray } from '../utils/arrays'
import { setUser, deauthenticateUser } from '../utils/authentification'

const User = Record({
  'id': '0',
  'name': 'Undefined',
  'email': '',
  'password': '',
  'userAvatar': ''
})
const defaultUser = getFirstRecordFromArray(User, [])
const defaultState = new Map({
  loading: false,
  loaded: false,
  error: false,
  user: defaultUser
})

export default (state = defaultState, action) => {
  const {type, response} = action

  switch (type) {

  case LOAD_USER + START:
    return state
      .set('loading', true)
      .set('loaded', false)
  case LOAD_USER + SUCCESS: {
    const activeUser = getFirstRecordFromArray(User, response)
    setUser('09w87rehfiogpvjeq0r54q0j')
    return state
      .set('loading', false)
      .set('loaded', true)
      .set('user', activeUser)
  }
  case LOGOUT_USER: {
    deauthenticateUser()
    const currentState = defaultState
    return currentState
  }
  }
  return state
}
