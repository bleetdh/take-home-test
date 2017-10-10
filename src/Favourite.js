import React, { Component } from 'react'

export class Favourite extends Component {
  render () {
    // - adding pics using url that user has favourited
    let favPic = this.props.favUrl.map((url, index) => {
      return (
        <div className='picture' key={index} style={{backgroundImage: `url(${url})`}} />
      )
    })
    return (
      <div className='favdiv'>
        <h1>Favourited Images</h1>
          {favPic}
      </div>
    )
  }
}
