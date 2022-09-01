import React, { Component } from 'react'

export default class CartCounter extends Component {
  constructor(props) {
    super(props)
    this.state = { //initialization of state
      counter: 0
    }
  }

  render() {

    return (
      <div className='card w-25'>
        <img src='https://occ-0-1001-590.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f' />
        <div className='d-flex'>
          <button onClick={() => {
            console.log("Increment btn clicked")
            // counter++;
            //Update state values
            this.setState({ counter: this.state.counter + 1 })
            // this.state.counter = this.state.counter + 1
          }} id="incrementBtn">+</button>
          {/* //access state values */}
          <div id="count">Ordered: {this.state.counter}</div>
          <button onClick={() => {
            this.setState({ counter: this.state.counter - 1 })
          }}>-</button>
        </div>
      </div>
    )
  }
}