import { LOAD_SECURITYSCORE  } from '../constants'

export function loadUserSecurityScore() {
    return {
        type: LOAD_SECURITYSCORE,
        callAPI: '/api/user/securityScore'
    }
}