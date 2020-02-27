import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import MemePage from './components/MemePage';
import UploadMemeForm from './components/UploadMemeForm';

import MainContainer from './containers/MainContainer';
import { Route, Switch } from 'react-router-dom';

const APIBase = 'http://localhost:3000/api/v1'

class App extends React.Component {

  state = {
    subreddit: 'featured', //'memes', 'dankmemes', 'meirl'
    memes: []
  }
  
    componentDidMount(){
      fetch(APIBase + '/memes')
        .then(res => res.json())
        .then(memes => {
          console.log(memes)
          this.setState({ memes })
        })
    }

  addNewMeme = (newMeme) => {
    fetch(APIBase + '/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newMeme)
    })
      .then(res => res.json())
      .then(meme => {
        this.setState({ memes: [...this.state.memes, meme] })
      })
  }

  changeSubreddit = (event) =>{
    this.setState({ subreddit: event.target.id })
  }

  render() {
    return (
      <div className="App">
        <NavBar subreddit={this.state.subreddit} changeSubreddit={this.changeSubreddit}/>
        <Switch>
          <Route path="/memes/:id" component={MemePage} />
          <Route path="/upload" render={(routerProps) => <UploadMemeForm {...routerProps} addNewMeme={this.addNewMeme} /> } />
          <Route path="/login" component={Login} />
          <Route path="/" render={() => <MainContainer memes={this.state.memes} subreddit={this.state.subreddit} />} />
        </Switch>
      </div>
    );
  }
}

export default App;