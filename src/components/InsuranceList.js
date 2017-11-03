import React, { Component } from 'react'

import InsuranceNode from './InsuranceNode'

class InsuranceList extends Component {

  render() {
    return <div> {this.getBody()} </div>
  }

  getBody(){
    const { insuranceList } = this.props
    const insuranceItems = insuranceList.map(insuranceItem => 
        <li key = {insuranceItem.id}><InsuranceNode insuranceNode = {insuranceItem}/></li>
    )
    
    return (
      <div>        
        <ul>{insuranceItems}</ul>
      </div>
    )
  }

}

export default InsuranceList
