import { LOAD_USER  } from '../constants'

export function loadUser() {
    return {
        type: LOAD_USER,
        callAPI: '/api/user'
    }
}