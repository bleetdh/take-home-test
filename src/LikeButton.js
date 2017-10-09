import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isItLike: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // - upon click, button to change color and remain there
  handleClick () {
    const newStatus = this.state.isItLike === null ? true : null
    this.setState({
      isItLike: newStatus
    })
  }

  render () {
    const defaultStyle = {
      backgroundColor: 'white'
    }
    const clickedStyle = {
      backgroundColor: 'red',
      display: 'inline'
    }

    if (this.state.isItLike) {
      return (
        <div>
          <button onClick={this.handleClick} style={clickedStyle}>like</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleClick} style={defaultStyle}>like</button>
        </div>
      )
    }
  }
}
