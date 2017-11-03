import { Record, Map, List } from 'immutable'

import { LOAD_USERNOTIFICATIONS, START, SUCCESS } from '../constants'

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
    errors: new List([]),
    userNotificationList: defaultUserNotification
})

export default (state = defaultState, action) => {
    const { type, response } = action

    switch (type) {

        case LOAD_USERNOTIFICATIONS + START:
            return state
                .set('loading', true)
        case LOAD_USERNOTIFICATIONS + SUCCESS:
            return state
                .set('loading', false)
                .set('userNotificationList', recordsFromArray(UserNotification, response))

    }
    return state
}
