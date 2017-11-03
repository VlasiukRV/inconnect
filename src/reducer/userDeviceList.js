import { Record, Map, List } from 'immutable'

import { LOAD_USERDEVICES, START, SUCCESS } from '../constants'

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
    errors: new List([]),
    userDeviceList: defaultUserDevice
})

export default (state = defaultState, action) => {
    const { type, response } = action

    switch (type) {

        case LOAD_USERDEVICES + START:
            return state
                .set('loading', true)
        case LOAD_USERDEVICES + SUCCESS:
            return state
                .set('loading', false)
                .set('userDeviceList', recordsFromArray(UserDevice, response))

    }
    return state
}
