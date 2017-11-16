import React, { Component } from 'react'

import UserDeviceListSearchBar from '../containers/UserDeviceListSearchBar'
import UserDevice from './UserDevice'

class UserDeviceList extends Component {

  render() {
    return <div>
             { this.getBody() } </div>
  }

  getBody() {
    const {userDeviceList} = this.props
    const deviceItems = userDeviceList.map(device => <li key={ device.id }>
                                                       <UserDevice device={ device } />
                                                     </li>)
    return (
      <div>
        <UserDeviceListSearchBar />
        <ul className='user-devices-list'>
          { deviceItems }
        </ul>
      </div>
    )
  }

}

export default UserDeviceList
