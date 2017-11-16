import React, { Component } from 'react'
 
export default class IconUserDevice extends Component {

    render(){
      const {
        width,
        height,
        deviceType
      } = this.props

      let deviceIcon = ''
      if(deviceType == 'Camera'){
        deviceIcon = this.getIconCamera()
      }

      const viewBox = '0 0 '+(44)+' '+(44)
        return <div>
          <svg className='user-device-ico' width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} >
            {deviceIcon}
          </svg>
        </div>
    }

    getIconCamera(){
      return (
            <path d='M41.9,16.1L11.3,5.1c-0.5-0.2-0.9,0.1-1.1,0.5l-1.9,5.3c-0.2,0.5,0.1,0.9,0.5,1.1l1.8,0.6c-0.3,0.2-0.5,0.5-0.6,0.9L9.4,15
            c-0.4,1,0.2,2.2,1.2,2.6l8.2,3l-1.4,3.9c-1.5,0-2.9,0.9-3.4,2.3c-0.1,0.4-0.2,0.7-0.2,1.1l-6.2,2.8c-1-1.1-2.6-1.4-4-0.8
            c-1.8,0.8-2.6,2.9-1.8,4.7s2.9,2.6,4.7,1.8c1.3-0.6,2.1-1.9,2.1-3.3l6.1-2.7c0.4,0.4,0.9,0.8,1.5,1c1.8,0.7,3.9-0.3,4.6-2.1
            c0.5-1.4,0.1-2.8-0.9-3.8l1.4-4l9.7,3.5c1,0.4,2.2-0.2,2.6-1.2l0.6-1.6c0.1-0.4,0.1-0.7,0.1-1.1l2.8,1c0.3,0.1,0.7,0,0.9-0.2
            l4.4-4.4C42.7,17.1,42.5,16.3,41.9,16.1z'></path>        
        )
    }

}