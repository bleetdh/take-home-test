import React, { Component } from 'react'

export class Favourite extends Component {
  render () {
    if (this.props.favUrl.length > 0) {
      // - adding pics using url that user has favourited
      let favPic = this.props.favUrl.map((url, index) => {
        return (
          <div className='picture' key={index} >
            <img src={url} />
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
