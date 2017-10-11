import React, { Component } from 'react'
import {UnlikeFavourite} from './UnlikeFavourite.js'

export class FavouritePic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      urlOfPic: props.url
    }
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
  }
  render () {
    return (
      <div>
        <img src={this.props.url} />
        <UnlikeFavourite
          favouriteUrlArr={this.props.favouriteUrlArr}
          imageUrl={this.props.url}
          handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }} />

      </div>
    )
  }
}
