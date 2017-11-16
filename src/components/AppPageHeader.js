import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import ActiveUser from '../containers/ActiveUser'

import Logo from '../stylesheets/img/Logo'
import { logOutUser } from '../actions/users'

class AppPageHeader extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {isLoadedUser} = this.props

    return <div className='navbar navbar-default navbar-fixed-top' role='navigation'>
             <div className='container-fluid'>
               <div className='navbar-header'>
                 <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                   <span className='sr-only'>Toggle navigation</span>
                   <span className='icon-bar'></span>
                   <span className='icon-bar'></span>
                   <span className='icon-bar'></span>
                 </button>
                 <Link className='navbar-brand' to='/'>Inconnect
                   <Logo />
                 </Link>
               </div>
               <div className='collapse navbar-collapse'>
                 <ul className='nav navbar-nav navbar-right'>
                   { isLoadedUser && <li>
                                       <Link to='/' title='Home'>Home</Link>
                                     </li> }
                   { isLoadedUser && <li>
                                       <Link to='#connect'>Connect</Link>
                                     </li> }
                   { isLoadedUser && <li>
                                       <Link to='#' title='Active user'>
                                         <ActiveUser /> </Link>
                                     </li> }
                   { !isLoadedUser && <li>
                                        <Link to='/login'>Log in</Link>
                                      </li> }
                   { isLoadedUser && <li>
                                       <Link to='#' onClick={ this.LogOut.bind(this) }>Log out</Link>
                                     </li> }
                 </ul>
               </div>
             </div>
           </div>
  }

  LogOut(event) {
    event.preventDefault()
    this.props.logOutUser()
  }
}

export default connect(
  ({users}) => (
  {
    isLoadedUser: users.get('loaded')
  }
  ),
  {
    logOutUser
  }
)(AppPageHeader)
