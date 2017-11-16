import { Record, Map } from 'immutable'

import { THROW_ERROR, CLEAR_ERRORS } from '../constants'

import { recordsFromArray } from '../utils/arrays'

const AppError = Record({
  errorType: '',
  msg: ''
}
)

const defaulErrorsMap = recordsFromArray(AppError, [])
const defaultState = new Map({
  errors: defaulErrorsMap
})

export default (state = defaultState, action) => {
  const {type, error} = action

  switch (type) {
  case THROW_ERROR: {
    const appError = new AppError(error)
    const errors = state.get('errors')
    return state
      .set('errors', errors.set(error.errorType, appError))
  }
  case CLEAR_ERRORS: {
    return state
      .set('errors', defaulErrorsMap)
  }
  }

  return state
}