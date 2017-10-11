import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: props.loading
    }
    // - function comes from App
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
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
      // - clicked render (update heart color and to remove from favourite)
    if (this.props.favouriteUrlArr.includes(this.props.imageUrl)) {
      return (
        <div>
          <button className='likebutton' onClick={(url) => { this.handleFavouriteButtonClick(this.props.imageUrl) }} style={clickedStyle}>&hearts;</button>
        </div>
      )
    } else {
        // - unclicked render (supposed to add to favourite and change heart color)
      return (
        <div>
          <button className='likebutton' onClick={(url) => { this.handleFavouriteButtonClick(this.props.imageUrl) }} style={defaultStyle}>&hearts;</button>
        </div>
      )
    }
  }
}
