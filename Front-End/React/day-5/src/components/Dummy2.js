import React, { Component } from 'react'

export class Dummy2 extends Component {

  componentWillUnmount() {
    console.log("Unmounted")
  }
  render() {
    return (
      <div>Dummy2</div>
    )
  }
}

export default Dummy2