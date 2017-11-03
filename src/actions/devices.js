import { LOAD_USERDEVICES  } from '../constants'

export function loadUserDeviceList() {
    return {
        type: LOAD_USERDEVICES,
        callAPI: '/api/user/devices'
    }
}