import React, { Component } from 'react'
import {IndividualPic} from './IndividualPic.js'

export class Favourites extends Component {
  constructor (props) {
    super(props)
    // - to pass to UnlikeFavourite component
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
  }
  render () {
    if (this.props.favUrl.length > 0) {
      // - passing url of favPicArr to IndividualPic component
      let favPic = this.props.favUrl.map((url, index) => {
        return (
          <div className='picture' key={index} >
            <IndividualPic
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
