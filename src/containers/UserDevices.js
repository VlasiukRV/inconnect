import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserDeviceList from './../components/UserDeviceList'
import Spinner from './../components/Spinner'

import { loadUserDeviceList } from '../actions/devices'

class UserDevices extends Component {
    componentDidMount() {
      this.props.loadUserDeviceList()
    }

    render() {
      const { 
        loading, 
        userDeviceList 
      } = this.props

      const head = <h3><b>My Smart Devices</b></h3>

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
          <UserDeviceList userDeviceList = {userDeviceList} />
        </div>
      )         
    }

}

export default connect(
    ({userDeviceList, userDeviceListFilters}) => (
      {
        loading: userDeviceList.get('loading'),
        userDeviceList: filterList(userDeviceList.get('userDeviceList'), userDeviceListFilters)
      }
    ),
    {loadUserDeviceList}
)(UserDevices)

function filterList(entityList, filters) {
  let entityListFiltered = entityList

  const term = filters.term.toLowerCase();
  if(term != ''){
    entityListFiltered = entityList.filter(entity => {
      return entity.name.toLowerCase().includes(term);
    })
  }

  return entityListFiltered.valueSeq();
}