import React from 'react'

// function Details() {
//   return (
//     <div>Details</div> //JSX
//   )
// }


class Details extends React.Component {
  // //Mandatory in every class componenet
  render() {

    let name = 'dasf'
    return (
      <div>
        Hello {name === 'Ashutosh' ? 'Welcome' : ''}
        <button>Add</button>
      </div>
    )
  }
}

export default Details