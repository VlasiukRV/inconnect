import { Record, Map, List } from 'immutable'

import { LOAD_USER, START, SUCCESS } from '../constants'

import { getFirstRecordFromArray } from '../utils/arrays'

const User = Record({
    'id': '0',
    'name': 'Undefined',
    'userAvatar': ''
})
const defaultUser = getFirstRecordFromArray(User, [])
const defaultState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    user: defaultUser
})

export default (state = defaultState, action) => {
    const { type, response } = action

    switch (type) {

        case LOAD_USER + START:
            return state
                .set('loading', true)
        case LOAD_USER + SUCCESS:
            return state
                .set('loading', false)
                .set('user', getFirstRecordFromArray(User, response))

    }
    return state
}
