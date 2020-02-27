import React from 'react';
import { Link } from 'react-router-dom';

const APIBase = 'http://localhost:3000/api/v1'

class MemePage extends React.Component {

    state = {
        meme: null,
        comments: []
    }

    memeFetchHelper = () => {
        fetch(APIBase + `/memes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(({meme, comments}) => {
            this.setState({ meme, comments })
        })
    }

    componentDidMount() {
        this.memeFetchHelper()
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.memeFetchHelper()
        }
    }

    renderMemeComments() {
        return (
            <ul>
                {this.state.comments.map( comment => <li>{comment.content}</li>)}
            </ul>
        )
    }
  
    render(){
        return (
            this.state.meme 
            ? <div className="card-page" >
                <img src={this.state.meme.url} alt="meme"/>
                <div className="meme-page-title">{this.state.meme.title}</div>
                {this.renderMemeComments()}
                <Link to={`/memes/${this.state.meme.id + 1}`}>NEXT</Link>
            </div>
            : <div> LOADING </div>
        );
    }
}
  
  export default MemePage;