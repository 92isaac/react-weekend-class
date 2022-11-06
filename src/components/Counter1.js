import React, { Component } from 'react'
import Button from './Button'

export class Counter1 extends Component {
    constructor(){
        super()
        this.state = {count: 0}
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button onClick={()=>{this.setState({count: this.state.count + 1})}} btnName="Increment"/>
        <Button onClick={()=>{this.setState({count: this.state.count - 1})}} btnName="Decrement"/>
      </div>
    )
  }
}

export default Counter1