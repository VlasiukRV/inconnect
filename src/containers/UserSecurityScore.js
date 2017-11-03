import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from './../components/Spinner'

import { loadUserSecurityScore } from '../actions/securityScore'

class UserSecurityScore extends Component {

  componentDidMount() {
    this.props.loadUserSecurityScore()
  }

  render() {
    const { 
      loading,
      userSecurityScore,
      monthlyPayment
    } = this.props
    
    const head = <h3><b>My Security Score</b></h3>;
    
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
        <p><b>secutity score: {userSecurityScore.securityScore}</b></p>
        <p><b>secutity score status: {userSecurityScore.securityScoreStatus}</b></p>
        <p><b>monthlyPayment: {monthlyPayment}</b></p>
      </div>
    )
     
  }

}

export default connect(
    ({securityScore, insuranceList}) => (
      {
        loading: securityScore.get('loading'),
        userSecurityScore: securityScore.get('userSecurityScore'),
        monthlyPayment: insuranceList.get('monthlyPayment')
      }
    ),
    {loadUserSecurityScore}
)(UserSecurityScore)