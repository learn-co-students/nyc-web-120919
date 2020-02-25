import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    count: 0,
    editPizza: {
      customer: 'sarabeth',
      topping: '',
      size: 'large'
    }
    // favorite: true
  }

  updateCount = (e) => {
    // this.setState({ count: this.state.count + 1 }) 
    // this.setState({ count: this.state.count + 1 }) 
    // this.setState((prevState) => {
    //     console.log('first', prevState)
    //     return {count: prevState.count + 1 }
    // }) 
    // this.setState((prevState) => {
    //   console.log('second', prevState)
    //   return {count: prevState.count + 1}
    // }) 
    // this.setState((prevState) => {
    //   console.log('third', prevState)
    //   return {count: prevState.count + 1}
    // }) 
  }

  render() {
    return (
      <div>
        <button onClick={this.updateCount}>Add Count</button>
        <div>Here's my count: {this.state.count}</div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
