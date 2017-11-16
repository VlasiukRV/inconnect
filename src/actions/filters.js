import { CHANGE_FILTERS } from '../constants'

export function changeFilters(initiator, change) {
  return {
    type: '' + initiator + CHANGE_FILTERS,
    payload: {
      change
    }
  }
}