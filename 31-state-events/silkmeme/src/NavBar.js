import React from 'react';

function NavBar(props) {
    return (
      <div className="NavBar">
        <div id="silk-meme-icon">
          <img className="icon-photo" alt="silk" src="https://heiq.com/wp-content/uploads/2016/10/shutterstock_329722193.jpg"/>
          <span className="icon-title">SilkMeme</span>
        </div>
        <button
          onClick={props.changeSubreddit}
          id="featured" 
          className={`nav option ${props.subreddit === 'featured' ? 'active': '' }`}>
            Featured
        </button>
        <button onClick={props.changeSubreddit} id="memes" className={`nav option ${props.subreddit === 'memes' ? 'active': '' }`}>Memes</button>
        <button onClick={props.changeSubreddit} id="dankmemes" className={`nav option ${props.subreddit === 'dankmemes' ? 'active': '' }`}>DankMemes</button>
        <button onClick={props.changeSubreddit} id="meirl" className={`nav option ${props.subreddit === 'meirl' ? 'active': '' }`}>MeIRL</button>
        <button className="nav option upload">Upload</button>
        <button className="nav option login">Login</button>
      </div>
    );
  }
  
  export default NavBar;


  /***
   * 
   * 
   * arrow func parens
   * 
   * () => { }   ===> need parens for no arguments
   * singleArg => {} ====> no parens for single arg
   * (arg1, arg2, arg3) => {} ====> need parens for 2+ args
    */