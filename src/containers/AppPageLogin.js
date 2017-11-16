import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm';
import { logInUser } from '../actions/users'

class AppPageLogin extends Component {

  constructor(props) {
    super(props)

    this.state = {
      errors: {},
      successMessage: '',
      user: {
        email: '',
        password: ''
      }
    }

    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  changeUser(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault()
    this.props.logInUser()
  }

  render() {

    return (<div>
              <LoginForm onSubmit={ this.processForm } onChange={ this.changeUser } errors={ this.state.errors } successMessage={ this.state.successMessage } user={ this.state.user }
              />
            </div>
    );
  }

}

export default connect(null, {
  logInUser
})(AppPageLogin)
