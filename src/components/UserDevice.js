
import React, { Component } from 'react'
import PropTypes from 'prop-types';

import IconUserDevice from '../stylesheets/img/IconUserDevice'

class UserDevice extends Component {

  render() {
    if (!this.props.device) return <h3>Haw no devices</h3>

    const {device} = this.props

    const deviceInfo = Object.keys(device.deviceInfo).map((keyName) => ' ' + keyName + ': ' + device.deviceInfo[keyName] + '; '
    )

    return (
      <div className='user-device'>
        <div className='user-device-ico-wrap'>
          <IconUserDevice width='45' height='45' deviceType={ device.deviceType } />
        </div>
        <div className='user-device-info-wrap'>
          <p><b>{ device.name }</b></p>
          <p>
            { device.mfr } |
            { device.deviceType }
          </p>
          <p>
            { deviceInfo }
          </p>
        </div>
      </div>
    )
  }

}

UserDevice.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  })
}

export default UserDevice