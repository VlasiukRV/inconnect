import { LOAD_SECURITYSCORE } from '../constants'

export function loadUserSecurityScore() {
  return {
    type: LOAD_SECURITYSCORE,
    checkAuthenticated: true,
    callAPI: '/api/user/securityScore'
  }
}