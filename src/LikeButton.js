import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isItLike: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleColorChangeClick = this.handleColorChangeClick.bind(this)
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
  }
  // - upon click, button to change color and remain there
  handleColorChangeClick () {
    const newStatus = this.state.isItLike === null ? true : null
    this.setState({
      isItLike: newStatus
    })
  }
  // - combine 2 functions into 1 function
  handleClick (e) {
    this.handleColorChangeClick()
    this.handleFavouriteButtonClick(this.props.imageUrl)
  }

  render () {
    // - define default style first
    const defaultStyle = {
      color: 'rgba(255, 0, 0, 0.3)'
    }
    // - define clicked style
    const clickedStyle = {
      color: 'rgba(255, 0, 0, 1)',
      display: 'inline'
    }
    // - clicked render
    if (this.state.isItLike) {
      return (
        <div>
          <button onClick={this.handleClick} style={clickedStyle}>&hearts;</button>
        </div>
      )
    } else {
      // -unclicked render
      return (
        <div>
          <button onClick={this.handleClick} style={defaultStyle}>&hearts;</button>
        </div>
      )
    }
  }
}
