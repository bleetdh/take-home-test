import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: props.loading
    }
    // - function comes from App component
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
      // - clicked render(already favourited pic) (lighten heart color and to remove from favouriteUrlArr)
    if (this.props.favouriteUrlArr.includes(this.props.imageUrl)) {
      return (
        <div>
          <button className='likebutton' onClick={(url) => { this.handleFavouriteButtonClick(this.props.imageUrl) }} style={clickedStyle}>&hearts;</button>
        </div>
      )
    } else {
        // - unclicked render (supposed to add to favouriteUrlArr and darken heart color)
      return (
        <div>
          <button className='likebutton' onClick={(url) => { this.handleFavouriteButtonClick(this.props.imageUrl) }} style={defaultStyle}>&hearts;</button>
        </div>
      )
    }
  }
}
