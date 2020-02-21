import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    number: 0,
    myInterval: null,
    backgroundColor: 'white'
  }

  createInterval = () => {
    let myInterval = setInterval(() => {
      this.setState({ number: Math.floor(Math.random() * 10) + 1 })
    }, 1000)
    this.setState({ myInterval: myInterval })
  }

  componentDidMount(){
    this.createInterval()
  }

  componentWillUnmount(){
    clearInterval(this.state.myInterval)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.number < this.state.number){
      this.setState({ backgroundColor: 'green' })
    } else if(prevState.number > this.state.number) {
      this.setState({ backgroundColor: 'red' })
    } 
    // else {
    //   alert('won!')
    //   // this.setState({ backgroundColor: 'white'})
    // }
  }

  handleClick = () => {
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else {
      this.createInterval();
    }
  }

  // 1. X On app load, give me a random number # 1 - 100 every second
  // 2. X On button click, stop /start that interval
  // 3. X Red / Green backgrounds (red when new number is higher than prevNumber)
  // 4. X Clean up! When app stops 


  render(){
    return (
      <div className="box" style={{backgroundColor: this.state.backgroundColor}}>
        <button onClick={this.handleClick}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 