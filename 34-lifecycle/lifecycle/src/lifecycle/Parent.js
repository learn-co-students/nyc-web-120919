import React from 'react'
import Child from './Child'

class Parent extends React.Component {
    // constructor() {
    //     super();
    
    //     console.log('CONSTRUCTING PARENT')
    //   }

    componentDidMount(){
        console.log('DID MOUNT PARENT')
        // what to do here:
        // fetch data
        // setTimeouts 
        // subscribe to some channel 

        // fetch('myApi')
        //     .then(res => res.json())
        //     .then(data => {
        //         // set some state stuff 
        //     })
    }

    state = {
        showChildren: true
    }

    toggleShow = () => {
        this.setState({ showChildren: !this.state.showChildren })
    }

    componentWillUnmount() {
        // gives you the chance to clean up
        // remove subscriptions or setTimeouts here
        // so NO MEMORY LEAKS 
    }

    componentDidUpdate(prevProps, prevState) {
        /** BIG WARNING!!!! BE CAREFUL SETTING STATE HERE */
        /** onnnnllyyyyyyy inside of conditionals  */

        // this.props.channelId !== prevProps.channelId ===> go grab some new messages
        // this.setState({ count: this.state.count + 1 })
    }

    render(){
        console.log('RENDERING PARENT')
        return (
            <div className="box">
                <button onClick={this.toggleShow}>Click</button>
                <p>Parent</p>
                {this.state.showChildren && <Child name="child"/>}
            </div>
        );

    }
}


export default Parent;


// 'WILL UNMOUNT CHILD'
// 'WILL UNMOUNT GRANDCHILD'

// 'WILL UNMOUNT GRANDCHILD'
// 'WILL UNMOUNT CHILD'

// correct!!!!!
// 'CONSTRUCTING PARENT'
// 'CONSTRUCTING CHILD'
// 'CONSTRUCTING GRANDCHILD'

// 'CONSTRUCTING PARENT'
// 'RENDERING PARENT'
// 'CONSTRUCTING CHILD'
// 'RENDERING CHILD'
// 'CONSTRUCTING GRANDCHILD'
// 'RENDERING GRANDCHILD'



// 'CONSTRUCTING PARENT'
// 'DID MOUNT PARENT'
// 'RENDERING PARENT'
// 'CONSTRUCTING CHILD'
// 'DID MOUNT CHILD'
// 'RENDERING CHILD'
// 'CONSTRUCTING GRANDCHILD'
// 'DID MOUNT GRANDCHILD'
// 'RENDERING GRANDCHILD'

// 'CONSTRUCTING PARENT'
// 'RENDERING PARENT'
// 'DID MOUNT PARENT'
// 'CONSTRUCTING CHILD'
// 'RENDERING CHILD'
// 'DID MOUNT CHILD'
// 'CONSTRUCTING GRANDCHILD'
// 'RENDERING GRANDCHILD'
// 'DID MOUNT GRANDCHILD'


// 'CONSTRUCTING PARENT'
// 'RENDERING PARENT'
// 'CONSTRUCTING CHILD'
// 'RENDERING CHILD'
// 'CONSTRUCTING GRANDCHILD'
// 'RENDERING GRANDCHILD'
// 'DID MOUNT GRANDCHILD'
// 'DID MOUNT CHILD'
// 'DID MOUNT PARENT'

