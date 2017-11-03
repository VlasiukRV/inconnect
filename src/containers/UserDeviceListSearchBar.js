import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeFilters } from '../actions/filters'
import { USERDEVICE_LIST } from '../constants'

class UserDeviceListSearchBar extends Component {
  
  constructor(props) {
    super(props)
      this.state = {
        actionInitiator: USERDEVICE_LIST
      }
  }

  render() {
    const { filters } = this.props
    return <div>
        <input          
          type='text'
          className='form-control'
          placeholder='Search device by name...'
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
    const { userDeviceListFilters } = state
    return { 
        filters: userDeviceListFilters
    }
},
{ changeFilters })(UserDeviceListSearchBar)
