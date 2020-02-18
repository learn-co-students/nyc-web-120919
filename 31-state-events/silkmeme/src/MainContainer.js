import React from 'react';
import CardItem from './CardItem';
import sampleMemes from './data';

function MainContainer() {

    let memeCards = sampleMemes.slice(0,18).map((memeInfo, index) => 
      <CardItem 
        key={index} 
        memeInfo={memeInfo}
        color={  index % 2 ? 'white' : 'skyblue'  }/> )


    return (
      <div className="main-container">
            <h1 className="main-title">Trending!!!!</h1>{/** this might change once we've got those options up top */}
            <div className="meme-container"> {memeCards} </div>
            <div className="page-nav">
              <button>Previous</button>
              <button>Next</button>
            </div>
      </div>
    );
}
  
export default MainContainer;