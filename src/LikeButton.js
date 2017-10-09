import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'none',
      color: 'white'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // - upon click, button to change color and remain there
  handleClick () {
    const newColor = this.state.color === 'white' ? 'red' : 'white'
    const newDisplay = this.state.display === 'none' ? 'inline' : 'none'
    this.setState({
      display: newDisplay,
      color: newColor
    })
    console.log(this.state.color)
    console.log(this.state.display)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} style={{background: this.state.color, display: this.state.display}}>like</button>
      </div>
    )
  }
}
