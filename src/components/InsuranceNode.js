
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
  
import InsuranceList from './InsuranceList'
import { changeEntityInsuranceNode } from '../actions/insurance'
import './InsuranceNodeStyle.css'

 class InsuranceNode extends Component {

    render() {
        if (!this.props.insuranceNode) return <h3>Haw no insurance</h3>

        const { 
            insuranceNode
        } = this.props
        
        let insuranceNodeChildren = ''

        if(insuranceNode.children && insuranceNode.children.length > 0){
          insuranceNodeChildren = (<InsuranceList insuranceList = {insuranceNode.children} />)
        }
        let opts = {};
        if(insuranceNode.isGrup){
          opts['readOnly'] = 'readOnly'
        }

        return (  
          <div>
            <p className='insuranceName'>
                <b>{insuranceNode.name}</b>
                <input          
                  type='number'
                  className='form-control insuranceValue'
                  placeholder='Search device by name...'
                  value={insuranceNode.value}
                  onChange={this.handleValueChange.bind(this)}
                  {...opts}
                />
            </p>
            <p><div dangerouslySetInnerHTML={{__html: insuranceNode.description}} /></p>
            <p></p>
            {insuranceNodeChildren} 
            <hr />
          </div>
        )  
    } 

    handleValueChange (event) {
      event.preventDefault()
      const { insuranceNode, changeEntityInsuranceNode } = this.props
      changeEntityInsuranceNode(insuranceNode.id, 'value', +event.target.value)
    }
    handleValueChangeUp (event) {
      event.preventDefault()
      const { insuranceNode, changeEntityInsuranceNode } = this.props
      changeEntityInsuranceNode(insuranceNode.id, 'value', (insuranceNode.value+100))
    }
    handleValueChangeDovn (event) {
      event.preventDefault()
      const { insuranceNode, changeEntityInsuranceNode } = this.props
      changeEntityInsuranceNode(insuranceNode.id, 'value', (insuranceNode.value-100))
    }    
}

InsuranceNode.propTypes = {  
    comment: PropTypes.shape({  
        id: PropTypes.string.isRequired,  
        name: PropTypes.string  
    })
}

export default connect(
    ({insuranceList}) => (
    {
      insuranceList:insuranceList
    }
    ),
    {changeEntityInsuranceNode}
)(InsuranceNode)