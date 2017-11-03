import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from './../components/Spinner'

import { loadUserSecurityScore } from '../actions/securityScore'

class UserSecurityScoreHistory extends Component {

  componentDidMount() {
    this.props.loadUserSecurityScore()
  }

  render() {
    const { 
      loading,
      userSecurityScore
    } = this.props
    
    const head = <h3><b>My Security Score history</b></h3>;
    
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
        <p>
          <b> Security Score: </b>
        </p>
        <ul>
          <li>today: {userSecurityScore.securityScoreToday}</li>
          <li>last month: {userSecurityScore.securityScoreLastMonth}</li>
          <li>all time: {userSecurityScore.securityScoreAllTime}</li>
        </ul>
        
        <p>
          <b> Presence: </b>
        </p>
        <ul>
          <li>today: {userSecurityScore.presenceToday}</li>
          <li>last month: {userSecurityScore.presenceLastMonth}</li>
          <li>all time: {userSecurityScore.presenceAllTime}</li>
        </ul>

      </div>
    )
     
  }

}

export default connect(
    ({securityScore}) => (
      {
        loading: securityScore.get('loading'),
        userSecurityScore: securityScore.get('userSecurityScore')
      }
    ),
    {loadUserSecurityScore}
)(UserSecurityScoreHistory)