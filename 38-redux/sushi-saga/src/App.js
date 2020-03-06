import React from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { connect } from 'react-redux';
import { fetchSushiCreator } from './actionCreators';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchSushis()
  }

  render(){
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchSushiCreator())
  }
}


export default connect(null, mdp)(App);