import React, { Component } from 'react'

export class UnlikeFavourite extends Component {
  constructor (props) {
    super(props)
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
  }

  render () {
    // - define clicked style
    const clickedStyle = {
      color: 'rgba(255, 0, 0, 1)',
      display: 'inline'
    }
      // - clicked render (update heart color and to remove from favourite)
    if (this.props.favouriteUrlArr.includes(this.props.imageUrl)) {
      return (
        <div>
          <button onClick={(url) => { this.handleFavouriteButtonClick(this.props.imageUrl) }} style={clickedStyle}>&hearts;</button>
        </div>
      )
    }
  }
}
