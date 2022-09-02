import React, { Component } from 'react'
import Dummy2 from './Dummy2'
export class Dummy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      showComp: false
    }
    console.log("Constructor is called")
  }

  componentDidMount() {
    console.log("componentDidMount is called")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called")
  }

  render() {
    console.log("Render is called")
    return (
      <div>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Add</button>
        <button onClick={() => this.setState({ showComp: !this.state.showComp })}>Show Component</button>
        {this.state.showComp ? <Dummy2 /> : null}
      </div>
    )
  }


}

export default Dummy