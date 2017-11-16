import React, { Component } from 'react'
import { connect } from 'react-redux'

import InsuranceList from './../components/InsuranceList'
import Spinner from './../stylesheets/img/Spinner'
import InsuranceListSearchBar from './InsuranceListSearchBar'

import { arrayToTree } from '../utils/tree'

class Insurance extends Component {
  componentDidMount() {}

  render() {
    const {loading, insuranceSum, monthlyPayment, insuranceList} = this.props

    const head = <h3>My Coverages</h3>

    if (loading) {
      return (
        <div>
          { head }
          <h1><Spinner width='50' height='50' /></h1>
        </div>
      )
    }

    return (
      <div>
        { head }
        <p><b>total summ: { insuranceSum }<br />
                  monthlyPayment: { monthlyPayment }
                </b></p>
        <InsuranceListSearchBar />
        <InsuranceList insuranceList={ insuranceList } />
      </div>
    )
  }

}

export default connect(
  ({insuranceList, insuranceListFilters}) => (
  {
    loading: insuranceList.get('loading'),
    insuranceList: buildTree(filterList(insuranceList.get('insuranceList'), insuranceListFilters)),
    insuranceSum: insuranceList.get('insuranceSum'),
    monthlyPayment: insuranceList.get('monthlyPayment')
  }
  )
)(Insurance)

function filterList(entityList, filters) {
  let entityListFiltered = entityList

  const term = filters.term.toLowerCase();
  if (term != '') {
    entityListFiltered = entityList.filter(entity => {
      return entity.name.toLowerCase().includes(term);
    })
  }

  return entityListFiltered.valueSeq();
}

export function buildTree(entityList) {
  return arrayToTree(entityList.toArray())
}
