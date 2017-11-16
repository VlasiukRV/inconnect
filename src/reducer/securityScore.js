import { Record, Map } from 'immutable'

import { LOAD_SECURITYSCORE, START, SUCCESS, FAIL } from '../constants'

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
const defaultEntity = getFirstRecordFromArray(SecurityScore, [])
const defaultState = new Map({
  loading: false,
  loaded: false,
  error: false,
  userSecurityScore: defaultEntity
})

export default (state = defaultState, action) => {
  const {type, response} = action

  switch (type) {

  case LOAD_SECURITYSCORE + START:
    return state
      .set('loading', true)
      .set('loaded', false)
      .set('error', false)
  case LOAD_SECURITYSCORE + SUCCESS:
    return state
      .set('loading', false)
      .set('loaded', true)
      .set('error', false)
      .set('userSecurityScore', getFirstRecordFromArray(SecurityScore, response))
  case LOAD_SECURITYSCORE + FAIL: {
    const currentState = defaultState
    return currentState
      .set('loading', false)
      .set('loaded', true)
      .set('error', true)
  }
  }

  return state
}
