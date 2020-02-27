import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
      <div className="NavBar">
        <div id="silk-meme-icon">
          <img className="icon-photo" alt="silk" src="https://heiq.com/wp-content/uploads/2016/10/shutterstock_329722193.jpg"/>
          <span className="icon-title">SilkMeme</span>
          <span className="icon-subtitle">シルク</span>
        </div>
        <Link
          to="/"
          onClick={props.changeSubreddit}
          id="featured" 
          className={`nav option ${props.subreddit === 'featured' ? 'active': '' }`}>
            Featured
        </Link>
        <Link to="/" onClick={props.changeSubreddit} id="memes" className={`nav option ${props.subreddit === 'memes' ? 'active': '' }`}>Memes</Link>
        <Link to="/" onClick={props.changeSubreddit} id="dankmemes" className={`nav option ${props.subreddit === 'dankmemes' ? 'active': '' }`}>DankMemes</Link>
        <Link to="/" onClick={props.changeSubreddit} id="meirl" className={`nav option ${props.subreddit === 'meirl' ? 'active': '' }`}>MeIRL</Link>
        <Link to="/upload" className="nav option upload">Upload</Link>
        <Link to="/login" className="nav option login">Login</Link>
      </div>
    );
  }
  
  export default NavBar;