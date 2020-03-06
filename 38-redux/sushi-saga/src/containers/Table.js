import React, { Fragment } from 'react'
import {connect} from 'react-redux';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.budget } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

const msp = state => { // reading from my store 
  return {
    budget: state.budget,
    eatenSushis: state.eatenSushis
  }
}

export default connect(msp)(Table);