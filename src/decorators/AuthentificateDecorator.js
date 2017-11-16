import React from 'react'
import { isAuthenticated } from '../utils/authentification'

export default (Component) => class AuthentificateDecorator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: isAuthenticated()
    }
  }

  render() {
    return <Component {...this.props} isAuthenticated={ this.state.isAuthenticated } />
  }
}
