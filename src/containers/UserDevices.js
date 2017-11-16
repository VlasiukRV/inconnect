import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserDeviceList from './../components/UserDeviceList'
import Spinner from './../stylesheets/img/Spinner'

import '../stylesheets/UserDevicesStyle.css';

class UserDevices extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className='user-devices'>
        { this.getBody() }
      </div>
    )

  }

  getBody() {
    const {loading, userDeviceList} = this.props

    const head = (<div className='user-devices-title'>
                    <h3>My Smart Devices</h3></div>)

    if (loading) {
      return (
        <div>
          { head }
          <h1><Spinner width='50' height='50' /></h1>
        </div>
      )
    }

    return (
      <div>
        { head }
        <UserDeviceList userDeviceList={ userDeviceList } />
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
  )
)(UserDevices)

function filterList(entityList, filters) {
  let entityListFiltered = entityList

  const term = filters.term.toLowerCase();
  if (term != '') {
    entityListFiltered = entityList.filter(entity => {
      return entity.name.toLowerCase().includes(term);
    })
  }

  return entityListFiltered.valueSeq();
}