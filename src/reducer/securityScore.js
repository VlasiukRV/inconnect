import { Record, Map, List } from 'immutable'

import { LOAD_SECURITYSCORE, START, SUCCESS } from '../constants'

import { getFirstRecordFromArray } from '../utils/arrays'

const SecurityScore = Record({
    'securityScore': 0,
    'securityScoreStatus': '',

    'securityScoreToday': 0,
    'securityScoreLastMonth': 0,
    'securityScoreAllTime': 0,
    'presenceToday': 0,
    'presenceLastMonth': 0,
    'presenceAllTime': 0
})
const defaultSecurityScore = getFirstRecordFromArray(SecurityScore, [])
const defaultState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    userSecurityScore: defaultSecurityScore
})

export default (state = defaultState, action) => {
    const { type, response } = action

    switch (type) {

        case LOAD_SECURITYSCORE + START:
            return state
                .set('loading', true)
        case LOAD_SECURITYSCORE + SUCCESS:
            return state
                .set('loading', false)
                .set('userSecurityScore', getFirstRecordFromArray(SecurityScore, response))

    }
    return state
}
