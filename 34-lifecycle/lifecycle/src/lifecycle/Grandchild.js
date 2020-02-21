import React from 'react'

class Grandchild extends React.Component {
//   constructor() {
//     super();

//     console.log('CONSTRUCTING GRANDCHILD')
//   }

//   componentDidMount(){
//     console.log('DID MOUNT GRANDCHILD')
// }

  componentWillUnmount() {
    console.log('WILL UNMOUNT GRANDCHILD')
  }

  render(){
    console.log('RENDERING GRANDCHILD')

    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 
