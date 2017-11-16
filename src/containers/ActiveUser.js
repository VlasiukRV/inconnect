import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../stylesheets/img/Spinner'

class User extends Component {

  render() {
    const {loaded, loading, user} = this.props

    if (!loaded) return null

    if (loading) return <h1><Spinner width='50' height='50' /></h1>

    return <div>
             { user.name }
             <img className='inc_profile_image profile-image img-circle' src={ user.userAvatar } />
           </div>
  }

}

export default connect(
  ({users}) => (
  {
    loaded: users.get('loaded'),
    loading: users.get('loading'),
    user: users.get('user')
  }
  )
)(User)
