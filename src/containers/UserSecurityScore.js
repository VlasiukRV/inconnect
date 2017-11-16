import React, { Component } from 'react'
/*import { findDOMNode } from 'react-dom'*/
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import Spinner from './../stylesheets/img/Spinner'

import '../stylesheets/UserSecurityScoreStyle.css';

class UserSecurityScore extends Component {

  componentDidMount() {}

  render() {
    const head = (<div className='information-block-title'>
                    <h3>My Security Score</h3></div>);

    return (
      <div className='information-block user-security-score'>
        { head }
        <div className='information-block-body'>
          { this.getBody() }
        </div>
        <div>
          <ul className='information-block-nav'>
            <li>
              <Link to='#'>Get Recommendations</Link>
            </li>
            <li>
              <Link to='/score/coverage'>View History</Link>
            </li>
            <li>
              <Link to='/score/coverage'>See Coverages</Link>
            </li>
            <li>
              <Link to='#' onClick={ this.handleRecalculate.bind(this) }>Recalculate</Link>
            </li>
          </ul>
        </div>
      </div>
    )

  }

  getBody() {

    const {loading, userSecurityScore, monthlyPayment} = this.props

    if (loading) {
      return (
        <div>
          <Spinner width='50' height='50' />
        </div>
      )
    }

    return (
      <div>
        <h4>monthly payment: { monthlyPayment }</h4>
        <div className='chart'>
          <div className='pieChart'></div>
          <div ref='chart' className='pieChartBody'></div>
          <div className='chartInformation'>
            <h2>{ userSecurityScore.securityScore }%</h2>
            <p>
              { userSecurityScore.securityScoreStatus }
            </p>
          </div>
        </div>
      </div>
    )

  }

  handleRecalculate(event) {
    event.preventDefault()
    this.props.loadUserSecurityScore()
  }

}

export default connect(
  ({securityScore, insuranceList}) => (
  {
    loading: securityScore.get('loading'),
    userSecurityScore: securityScore.get('userSecurityScore'),
    monthlyPayment: insuranceList.get('monthlyPayment')
  }
  )
)(UserSecurityScore)