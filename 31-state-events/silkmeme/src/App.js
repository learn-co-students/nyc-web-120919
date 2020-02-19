import React from 'react';
import './App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MainContainer from './MainContainer';

class App extends React.Component {

  // OLD MONEY
  // constructor(){
  //   super();

  //   this.state = {
  //     color: 'blue'
  //   }

  //   this.divClickHandle = this.divClickHandle.bind(this)
  // }

  // NEW MONEY
  state = {
    subreddit: 'featured' //'memes', 'dankmemes', 'meirl'
  }

  changeSubreddit = (event) =>{
    this.setState({ subreddit: event.target.id })
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
        <NavBar subreddit={this.state.subreddit} changeSubreddit={this.changeSubreddit}/>
        {this.renderUploadForm()}
        <SearchBar />
        <MainContainer subreddit={this.state.subreddit} />
      </div>
    );
  }
}

export default App;