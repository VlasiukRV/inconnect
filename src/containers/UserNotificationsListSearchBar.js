import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeFilters } from '../actions/filters'
import { USERNOTIFICATION_LIST } from '../constants'

class UserNotificationsListSearchBar extends Component {

  constructor(props) {
    super(props)
      this.state = {
        actionInitiator: USERNOTIFICATION_LIST
      }
  }
  
  render() {
    const { filters } = this.props
    return <div>
        <input          
          type='text'
          className='form-control'
          placeholder='Search notifacation by name...'
          value={filters.term}
          onChange={this.handleTermChange.bind(this)}
        />
      </div>
  }

  handleTermChange (event) {
      const { changeFilters } = this.props
      const term = event.target.value
      changeFilters(this.state.actionInitiator, {term: term})
  }

}

export default connect(state => {
    const { userNotificationListFilters } = state
    return { 
        filters: userNotificationListFilters
    }
},
{ changeFilters })(UserNotificationsListSearchBar)
