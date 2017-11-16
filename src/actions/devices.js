import { LOAD_USERDEVICES } from '../constants'

export function loadUserDeviceList() {
    return {
        type: LOAD_USERDEVICES,
        checkAuthenticated: true,
        callAPI: '/api/user/devices'
    }
}