import React, { Fragment, useState, useEffect } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainerHook = (props) => {

  const [startIndex, setStartIndex] = useState(0) 
  // ^^^ is an example of array destructuring assignment 
  // startIndex is like this.state.startIndex 
  // setStartIndex is like this.setState({ startIndex: _____ })

  const updateIndex = () => {
      let nextIndex = startIndex + 4 
      if( nextIndex >= props.sushis.length ){ nextIndex = 0 }
      setStartIndex(nextIndex)
  }

  useEffect(() => {
    const myInterval = setInterval(() => console.log('Hey!'), 1000 )
  
    return () => {
      clearInterval(myInterval)
    }  
  })

  let displayedSushi = props.sushis.slice(startIndex, startIndex + 4)

  return (
    <Fragment>
      <div className="belt">
        {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/>)}
        <MoreButton updateIndex={updateIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainerHook;