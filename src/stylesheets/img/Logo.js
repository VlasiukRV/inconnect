import React, { Component } from 'react'
 
export default class IconUserDevice extends Component {

    render(){
      const {
        width,
        height
      } = this.props

      let icon = this.getIcon()

      const viewBox = '0 0 '+(223.2)+' '+(59)
        return <div>
          <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} >
            {icon}
          </svg>
        </div>
    }

    getIcon(){
      return (<div>
            
  </div>
        )
    }

}