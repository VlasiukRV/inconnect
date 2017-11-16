import { LOAD_INSURANCE, CHANGE_ENTITY_INSURANCE_NODE } from '../constants'

export function loadInsuranceList() {
  return {
    type: LOAD_INSURANCE,
    checkAuthenticated: true,
    callAPI: '/api/insurance'
  }
}

export function changeEntityInsuranceNode(insuranceNodeId, key, value) {
  return {
    type: CHANGE_ENTITY_INSURANCE_NODE,
    payload: {
      insuranceNodeId,
      key,
      value
    }
  }
}