import React from 'react';
import CardItem from './CardItem';
import sampleMemes from './data';

function MainContainer() {
    console.log(sampleMemes)

    let memeCards = sampleMemes.map((memeInfo, index) => 
      <CardItem 
        key={index} 
        memeInfo={memeInfo}
        color={  index % 2 ? 'white' : 'skyblue'  }/> )


    return (
      <div className="main-container">
            <h1>Trending!!!!</h1>{/** this might change once we've got those options up top */}
            <div className="meme-container">
                {memeCards}
            </div>
      </div>
    );
}
  
export default MainContainer;