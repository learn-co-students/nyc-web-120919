import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { 
  likeActionCreator, 
  dislikeActionCreator,
  toggleActionCreator,
  addTextActionCreator,
  changeTextCreator
} from './actionCreators'


 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class App extends React.Component {

  render(){
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggle}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={(event) => this.props.changeText(event.target.value)}/>
        <button onClick={this.props.addText}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

const msp = (state) => {
  console.log('in MSP', state)
  return {
    likes: state.likes, 
    darkMode: state.darkMode, 
    text: state.text, 
    thangs: state.thangs 
  }
}

const mdp = (dispatch) => {
  return {
    like: () => dispatch(likeActionCreator()),
    dislike: () => dispatch(dislikeActionCreator()),
    toggle: () => dispatch(toggleActionCreator()),
    addText: () => dispatch(addTextActionCreator()),
    changeText: (newText) => dispatch(changeTextCreator(newText))
    // a series of functions app will be able to call to affect our store 
  }
}


export default connect(msp, mdp)(App);



/**
 * 
 * state = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
  }

  dispatch = (action) => {
    // job: APPLY NEW STATE
    let newState = this.reducer(action)
    this.setState(newState)
  }

  reducer = (action) => {  // action will look like... { type: 'someStringHere' }
    // job: CALCULATE NEW STATE
    let newState;
    switch(action.type) {
      case 'LIKE':
        newState = { likes: this.state.likes + 1 }
        break;
      case 'DISLIKE':
        newState = { likes: this.state.likes - 1 }
        break;
      case 'TOGGLE':
        newState = { darkMode: !this.state.darkMode }
        break;
      case 'CHANGETEXT':
        newState = { [action.payload.name]: action.payload.value } // action.payload
        break;
      case 'ADDTEXT':
        newState = { text: '', thangs: [this.state.text, ...this.state.thangs] }
        break;
      default:
        break;
    }
   return newState;
  }
 */