import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux';
import { nextPageCreator, eatSushiCreator } from '../actionCreators';

const SushiContainer = props => {
  let displayedSushi = props.sushis.slice(props.startIndex, props.startIndex + 4) // (startIndex, exclusive endIndex) LOOK AT THE DOCS
  
  return (
    <Fragment>
      <div className="belt">
        {displayedSushi.map(sushi => 
          <Sushi key={sushi.id} {...sushi} />
        )}
        <MoreButton updateIndex={props.updateIndex}/>
      </div>
    </Fragment>
  )
}

const msp = state => {
  return {
    startIndex: state.startIndex,
    sushis: state.sushis
  }
}

const mdp = dispatch => {
  return {
    updateIndex: () =>  dispatch(nextPageCreator())
  }
}

export default connect(msp, mdp)(SushiContainer)