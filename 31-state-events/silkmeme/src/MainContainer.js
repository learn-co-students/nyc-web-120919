import React from 'react';
import CardItem from './CardItem';
import sampleMemes from './data';

import SearchBar from './SearchBar';

class MainContainer extends React.Component {

  state = {
    startIndex: 0
  }

  handlePageChange = (type) => {
    if(type === 'prev' && this.state.startIndex !== 0){
      this.setState({ startIndex: this.state.startIndex - 18 })
    } else if(type === 'next' && this.state.startIndex + 18 < sampleMemes.length){
      this.setState({ startIndex: this.state.startIndex + 18 })
    }
    // this.setState({ startIndex: this.state.startIndex + 18 },
    //    () => { console.log('callback lyfe',this.state) }) // optional 2nd arg callback to setState
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
  
  render(){

    // this.props.subreddit is some string 

    let filteredMemes = sampleMemes.filter( item => {
      if(this.props.subreddit === 'featured') {
        return true
      } else {
        return item.subreddit === this.props.subreddit
      }
    })

    let memeCards = filteredMemes.slice(this.state.startIndex, this.state.startIndex + 18).map((memeInfo, index) => 
      <CardItem 
        key={index} 
        memeInfo={memeInfo}/> )
  
    return (
      <div className="main-container">


            {this.renderUploadForm()}
            <SearchBar />
            <h1 className="main-title">Trending!!!!</h1>{/** this might change once we've got those options up top */}
            <div className="meme-container"> {memeCards} </div>
            <div className="page-nav">
              <button onClick={() => this.handlePageChange('prev')}>Previous</button>
              <button onClick={() => this.handlePageChange('next')}>Next</button>
            </div>
      </div>
    );
  }
}

//  onClick={() => this.handlePageChange('next')}     HAS TO BE AN ARROW when the function needs some unique arguments

//  onClick={(event) => this.handlePageChange(event)} DOES NOT HAVE TO BE AN ARROW if it just needs event
//  onClick={this.handlePageChange}     IF IT DOESNT NEED ARGS AT ALL OR JUST NEEDS EVENT, you can just pass the reference 

  
export default MainContainer;