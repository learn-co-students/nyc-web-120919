import React from 'react';

class MemePage extends React.Component {

    state = {
        // what should go here 
    }

    componentDidMount() {
        // what should go here? 
    }

    renderMemeComments() {
        return (
            <div>
                Some comments go here
            </div>
        )
    }
  
    render(){
        return (
            <div className="card-page" >
                <img src={'FILL THIS IN'} alt="meme"/>
                <div className="meme-title">FILL THIS IN</div>
                {this.renderMemeComments()}
            </div>
        );
    }
}
  
  export default MemePage;