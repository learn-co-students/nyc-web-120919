import React from 'react';
import './App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MainContainer from './MainContainer';

class App extends React.Component {

  renderNavBar = () => {
    return (
      <div className="NavBar">
          <div id="silk-meme-icon">
            <img className="icon-photo" alt="silk" src="https://heiq.com/wp-content/uploads/2016/10/shutterstock_329722193.jpg"/>
            <span className="icon-title">SilkMeme</span>
          </div>
          <button className="nav option">Featured</button>
          <button id="subreddit-1" className="nav option">Memes</button>
          <button id="subreddit-2" className="nav option">DankMemes</button>
          <button id="subreddit-3" className="nav option">MeIRL</button>
          <button className="nav option upload">Upload</button>
          <button className="nav option login">Login</button>
        </div>
    )
  }

  renderUploadForm = () => {
    return (
      <div className="upload-form">
        <form>
          <h3>Upload a new Silky Meme</h3>
            <input placeholder="Title"/>
            <input placeholder="Image URL"/>
            <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
  
  render() {
    return (
      <div className="App">
        {this.renderNavBar()}
        {this.renderUploadForm()}
        <SearchBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;