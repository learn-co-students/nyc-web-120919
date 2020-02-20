import React from 'react';
import HogDetail from './HogDetail';



class HogTile extends React.Component{
    state = {
        showDetail: false
    }

    toggleDetails = () => {
        this.setState({ showDetail: !this.state.showDetail })
    }
    
    render(){
        const { name, dirty, toggleHogCleanliness } = this.props;
        const { showDetail } = this.state; 

        return (
            <div className="pigTile" onClick={this.toggleDetails}>
                <h1>{name}</h1>
                <button onClick={(event) => {
                    event.stopPropagation()
                    toggleHogCleanliness(name)
                }}>
                {!dirty ? 'Play in Mud!' : 'Shower!'}
                </button>
                <img src={`/hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`}/>
                {showDetail && <HogDetail {...this.props}/>}
                {/* {this.state.showDetail ?  <HogDetail {...this.props}/> : null } */}
            </div>
        )
    }
}

export default HogTile;