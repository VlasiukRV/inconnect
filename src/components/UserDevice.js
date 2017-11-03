
import React, { Component } from 'react'  
import PropTypes from 'prop-types';
  
 class UserDevice extends Component {

    render() {  
        if (!this.props.device) return <h3>Haw no devices</h3>

        const { 
            device
        } = this.props

        return (  
          <div>
            <p><b>{device.name}</b></p>
            <p>{device.deviceType} by {device.mfr}</p>
            
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