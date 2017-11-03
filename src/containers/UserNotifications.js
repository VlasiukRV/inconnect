import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserNotificationsList from './../components/UserNotificationsList'
import Spinner from './../components/Spinner'

import { loadUserNotificationsList } from '../actions/userNotifications'

class UserNotifications extends Component {

    componentDidMount() {
      this.props.loadUserNotificationsList()
    }

    render() {
      const { 
        loading, 
        notificationsList 
      } = this.props

      const head = <h3><b>Notifications</b></h3>;
      
      if (loading) {
        return (
          <div>
            {head}
            <h1><Spinner width='50' height='50' /></h1>
          </div>
        )
      }

      return (
        <div>
          {head}
          <UserNotificationsList notificationsList = {notificationsList} />
        </div>
      )
    }

}

export default connect(
    ({userNotificationList, userNotificationListFilters}) => (
      {
        loading: userNotificationList.get('loading'),
        notificationsList: filterNotificationsList(userNotificationList.get('userNotificationList'), userNotificationListFilters)
      }
    ),
    {loadUserNotificationsList}
)(UserNotifications)

function filterNotificationsList(entityList, filters) {
  let entityListFiltered = entityList

  const term = filters.term.toLowerCase();  
  if(term != ''){
    entityListFiltered = entityList.filter(entity => {
      return entity.name.toLowerCase().includes(term);
    })
  }

  return entityListFiltered.valueSeq();
}
