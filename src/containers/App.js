import React, { Component } from 'react'
import { Provider} from 'react-redux'

import store from '../store'
import ActiveUser from './ActiveUser/ActiveUser'
import UserSecurityScore from './UserSecurityScore'
import UserSecurityScoreHistory from './UserSecurityScoreHistory'
import UserNotifications from './UserNotifications'
import UserDevices from './UserDevices'
import Insurance from './Insurance'

export default class App extends Component {

    render(){
        return <div>
          <Provider store = {store}>
            <div>
              <ActiveUser />
              <div>
                <br />
                <UserSecurityScore />
              </div>
              <div>
                <br />
                <UserSecurityScoreHistory />
              </div>
              <div>
                <br />
                <UserNotifications />
              </div>
              <div >
                <br />
                <UserDevices />
              </div>
              <div >
                <br />
                <Insurance />
              </div>
            </div>
          </Provider>
        </div>
    }

}