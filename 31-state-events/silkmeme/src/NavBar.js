import React from 'react';

function NavBar() {
    return (
      <div className="NavBar">
        <div id="silk-meme-icon">
          <img className="icon-photo" alt="silk" src="https://heiq.com/wp-content/uploads/2016/10/shutterstock_329722193.jpg"/>
          <span className="icon-title">SilkMeme</span>
        </div>
        <button className="nav option">Featured</button>
        <button className="nav option">Memes</button>
        <button className="nav option">DankMemes</button>
        <button className="nav option">MeIRL</button>
        <button className="nav option upload">Upload</button>
        <button className="nav option login">Login</button>
      </div>
    );
  }
  
  export default NavBar;