import React, { Component } from 'react'
import { connect } from 'react-redux'

class Errors extends Component {

  render() {
    const {errors} = this.props
    const errorsLength = errors.size

    if (errorsLength == 0) return null

    const errorsList = errors.map(error => <li key={ error.errorType }>
                                             { error.msg }
                                           </li>)

    return <div className='information-block'>
             <div className='information-block-title'>
               Errors
             </div>
             <div className='information-block-body'>
               <ul className=''>
                 { errorsList }
               </ul>
             </div>
           </div>
  }

}

export default connect(
  ({errors}) => (
  {
    errors: errors.get('errors').valueSeq()
  }
  )
)(Errors)
