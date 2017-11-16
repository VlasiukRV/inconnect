import { Record, Map } from 'immutable'

import { LOAD_USERDEVICES, START, SUCCESS, FAIL } from '../constants'

import { recordsFromArray } from '../utils/arrays'

const UserDevice = Record({
  'id': '0',
  'name': 'Undefined',
  'deviceType': '',
  'mfr': '',
  'deviceInfo': {}
})
const defaultUserDevice = recordsFromArray(UserDevice, [])
const defaultState = new Map({
  loading: false,
  loaded: false,
  error: false,
  userDeviceList: defaultUserDevice
})

export default (state = defaultState, action) => {
  const {type, response} = action

  switch (type) {

  case LOAD_USERDEVICES + START:
    return state
      .set('loading', true)
      .set('loaded', false)
      .set('error', false)
  case LOAD_USERDEVICES + SUCCESS:
    return state
      .set('loading', false)
      .set('loaded', true)
      .set('error', false)
      .set('userDeviceList', recordsFromArray(UserDevice, response))
  case LOAD_USERDEVICES + FAIL: {
    const currentState = defaultState
    return currentState
      .set('loading', false)
      .set('loaded', true)
      .set('error', true)
  }
  }
  return state
}
