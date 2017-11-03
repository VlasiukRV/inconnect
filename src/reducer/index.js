import { combineReducers } from 'redux'

import users from './users'
import securityScore from './securityScore'

import userDeviceList from './userDeviceList'
import userDeviceListFilters from './userDeviceListFilters'

import userNotificationList from './userNotificationList'
import userNotificationListFilters from './userNotificationListFilters'

import insuranceList from './insuranceList'
import insuranceListFilters from './insuranceListFilters'

export default combineReducers({
    users: users,
    securityScore: securityScore,

    userDeviceList: userDeviceList,
    userDeviceListFilters: userDeviceListFilters,

    userNotificationList: userNotificationList,
    userNotificationListFilters: userNotificationListFilters,

    insuranceList: insuranceList,
    insuranceListFilters: insuranceListFilters
})