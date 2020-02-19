import React from 'react';

class CardItem extends React.Component {
  
  render(){
    const {memeInfo: {url, title}} = this.props;

    return (
      <div className="card-item" >
        <img src={url} alt="meme"/>
        <div className="meme-title">{title}</div>
      </div>
    );
  }
}
  
  export default CardItem;