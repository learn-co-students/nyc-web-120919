import React from 'react';
import { Link } from 'react-router-dom';

class CardItem extends React.Component {
  
  render(){
    const {memeInfo: {id, url, title}} = this.props;

    return (
      <div className="card-item" >
        <img src={url} alt="meme"/>
        <Link to={`/memes/${id}`}><div className="meme-title">{title}</div></Link>
      </div>
    );
  }
}
  
  export default CardItem;