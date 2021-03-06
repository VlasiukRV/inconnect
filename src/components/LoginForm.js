import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar'
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import '../stylesheets/LoginFormStyle.css';

class LoginForm extends Component {

  render() {
    const {onSubmit, onChange, errors, successMessage, user} = this.props
    return (<div>
              <Card className='login-form'>
                <form action='/' onSubmit={ onSubmit }>
                  <h2 className='card-heading'>Login</h2>
                  { successMessage && <p className='success-message'>
                                        { successMessage }
                                      </p> }
                  { errors.summary && <p className='error-message'>
                                        { errors.summary }
                                      </p> }
                  <div>
                    <Avatar size={ 80 } src={ user.userAvatar } />
                  </div>
                  <div className='field-line'>
                    <TextField floatingLabelText='Email' name='email' errorText={ errors.email } onChange={ onChange } value={ user.email } />
                  </div>
                  <div className='field-line'>
                    <TextField floatingLabelText='Password' type='password' name='password' onChange={ onChange } errorText={ errors.password } value={ user.password }
                    />
                  </div>
                  <div className='button-line'>
                    <RaisedButton type='submit' label='Log in' primary />
                  </div>
                  <CardText>Don't have an account?
                    <Link to={ '/signup' }>Create one</Link>.</CardText>
                </form>
              </Card>
            </div>)
  }

}

export default LoginForm