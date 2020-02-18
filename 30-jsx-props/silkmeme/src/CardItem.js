import React from 'react';

// function CardItem(props){} 
class CardItem extends React.Component {
  
  render(){
    const {color, memeInfo: {url, title}} = this.props;


    return (
      <div className="card-item" style={{ backgroundColor: color}}>
        <img src={url} alt="meme"/>
        <div className="meme-title">{title}</div>
      </div>
    );
  }
}
  
  export default CardItem;