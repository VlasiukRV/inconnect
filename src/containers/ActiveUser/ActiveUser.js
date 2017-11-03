import React, { Component } from 'react'  
import { connect } from 'react-redux'

import Spinner from '../../components/Spinner'

import { loadUser } from '../../actions/users'
import './ActiveUserStyle.css';

class User extends Component {  
    componentDidMount() {
      this.props.loadUser()
    }

    render() {
      const { loading, user } = this.props
      if (loading) return <h1><Spinner width='50' height='50' /></h1>
      return <div>
        {user.name} <img className='inc_profile_image profile-image img-circle' src={user.userAvatar} />
      </div>
    }

}

export default connect(
    ({users}) => (
      {
        loading: users.get('loading'),
        user: users.get('user')
      }
    ),
    {loadUser}
)(User)
