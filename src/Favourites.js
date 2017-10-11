import React, { Component } from 'react'
import {FavouritePic} from './FavouritePic.js'

export class Favourites extends Component {
  constructor (props) {
    super(props)
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
  }
  render () {
    if (this.props.favUrl.length > 0) {
      // - adding pics using url that user has favourited
      let favPic = this.props.favUrl.map((url, index) => {
        return (
          <div className='picture' key={index} >
            <FavouritePic
              url={url}
              favouriteUrlArr={this.props.favUrl}
              handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }} />
          </div>
        )
      })
      return (
        <div>
          <h1>Favourited Images</h1>
          {favPic}
        </div>
      )
    } else {
      return (
        <div>
          <p className='noresults'>No favourites found</p>
        </div>
      )
    }
  }
}
