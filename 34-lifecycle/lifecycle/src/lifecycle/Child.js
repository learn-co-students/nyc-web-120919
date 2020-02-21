import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {
//   constructor() {
//     super();

//     console.log('CONSTRUCTING CHILD')
//   }

//   componentDidMount(){
//     console.log('DID MOUNT CHILD')
// }

  componentWillUnmount() {
    // debugger;
    console.log('WILL UNMOUNT CHILD')
  }

  render(){
    console.log('RENDERING CHILD')

    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child 