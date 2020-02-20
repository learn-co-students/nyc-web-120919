import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from '../HogTile';
import Filters from '../Filters';


// HogTile
// HogDetail
// MainContainer


class App extends Component {
  state = { 
    hogs: hogs, 
    onlyGreased: false,
    sort: 'nosort'
  }

  toggleGreased = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased })
  }

  changeSort = (event) => {
    this.setState({ sort: event.target.value })
  }

  toggleHogCleanliness = (name) => { // this should be ID, but I don't have one
    let newHogs = this.state.hogs.map(hog => {
      if (hog.name === name){
        hog.dirty = !hog.dirty
      }
      return hog;
    })
    this.setState({ hogs: newHogs })

    // let targetHogIndex = this.state.hogs.findIndex(hog => hog.name === name)
    // let newHog = {...this.state.hogs[targetHogIndex]}
    // newHog.dirty = !newHog.dirty
    // let newHogArray = [...this.state.hogs]
    // newHogArray[targetHogIndex] = newHog
    // this.setState({ hogs: newHogArray })
  }


  render() {
    console.log(this.state.hogs)
    let displayedHogs = [...this.state.hogs]
    if(this.state.onlyGreased){
      displayedHogs = displayedHogs.filter( hog => hog.greased )
    }
    if(this.state.sort === 'weight'){
      displayedHogs.sort( (hogA, hogB) => hogA.weight - hogB.weight )
    } else if (this.state.sort === 'alphabetical'){
      displayedHogs.sort( (hogA, hogB) => hogA.name.toLowerCase() > hogB.name.toLowerCase() ? 1 : -1 )
      // displayedHogs.sort( (hogA, hogB) => hogA.name.localeCompare(hogB.name)  )
    }

    let cleanHogs = displayedHogs.filter( hog => !hog.dirty )
    let dirtyHogs = displayedHogs.filter( hog => hog.dirty )


    return (
      <div className="App">
          <Nav />
          <Filters 
            toggleGreased={this.toggleGreased} 
            onlyGreased={this.state.onlyGreased}
            changeSort={this.changeSort}
            sort={this.state.sort}/>
          <h3>Clean Pen</h3>
          <div className="ui grid container">
            {cleanHogs.map((hog, index) => <HogTile key={index} toggleHogCleanliness={this.toggleHogCleanliness} {...hog}/> )}
          </div>
          <h3>Dirty Pen</h3>
          <div className="ui grid container">
            {dirtyHogs.map((hog, index) => <HogTile key={index} toggleHogCleanliness={this.toggleHogCleanliness} {...hog}/> )}
          </div>
      </div>
    )
  }
}

export default App;
