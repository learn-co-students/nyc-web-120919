import React from 'react';
import './App.css';
import NavBar from './NavBar';
import MainContainer from './MainContainer';

class App extends React.Component {

  state = {
    subreddit: 'featured' //'memes', 'dankmemes', 'meirl'
  }

  changeSubreddit = (event) =>{
    this.setState({ subreddit: event.target.id })
  }

  render() {
    return (
      <div className="App">
        <NavBar subreddit={this.state.subreddit} changeSubreddit={this.changeSubreddit}/>
        <MainContainer subreddit={this.state.subreddit} />
      </div>
    );
  }
}

export default App;