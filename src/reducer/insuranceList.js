import { Record, Map } from 'immutable'

import { LOAD_INSURANCE, START, SUCCESS, FAIL, CHANGE_ENTITY_INSURANCE_NODE } from '../constants'

import { recordsFromArray, changeEntityValueInList } from '../utils/arrays'
import { sumUpEntityList } from '../utils/tree'

const Insurance = Record({
  'id': '0',
  'parent_id': '',
  'isGrup': false,
  'name': '',
  'description': '',
  'value': 0
})
const defaultInsuranceList = recordsFromArray(Insurance, [])
const defaultState = new Map({
  loading: false,
  loaded: false,
  error: false,
  insuranceList: defaultInsuranceList,
  insuranceSum: 0,
  monthlyPayment: 0
})

function updateInsuranceListInState(state, insuranceList) {
  const sumUpRez = sumUpEntityList(insuranceList)
  return state
    .set('loading', false)
    .set('insuranceList', sumUpRez.newEntityList)
    .set('insuranceSum', sumUpRez.sum)
    .set('monthlyPayment', Math.round(sumUpRez.sum / 12 * 100) / 100)
}

export default (state = defaultState, action) => {
  const {type, response, payload} = action

  switch (type) {

  case LOAD_INSURANCE + START:
    return state
      .set('loading', true)
      .set('loaded', false)
      .set('error', false)
  case LOAD_INSURANCE + SUCCESS: {
    const currentState = updateInsuranceListInState(state, recordsFromArray(Insurance, response))
    return currentState
      .set('loading', false)
      .set('loaded', true)
      .set('error', false)
  }
  case LOAD_INSURANCE + FAIL: {
    const currentState = defaultState
    return currentState
      .set('loading', false)
      .set('loaded', true)
      .set('error', true)
  }
  case CHANGE_ENTITY_INSURANCE_NODE: {
    let newInsuranceList = changeEntityValueInList(state.get('insuranceList'), payload.insuranceNodeId, {
      key: payload.key,
      value: payload.value
    });
    return updateInsuranceListInState(state, newInsuranceList)
  }
  }
  return state
}