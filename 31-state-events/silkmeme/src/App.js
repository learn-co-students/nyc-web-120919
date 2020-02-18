import React from 'react';
import './App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MainContainer from './MainContainer';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;


// const myFavFunc = () => {
//   console.log('hay faves')
// }

// export { App, myFavFunc };

// import { App, myFavFunc } from './App';

