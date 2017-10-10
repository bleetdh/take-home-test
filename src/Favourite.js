import React, { Component } from 'react'

export class Favourite extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favouriteUrlArr: props.favUrl
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick (e) {
    console.log(this.props.favUrl)
  }
  render () {
    let favPic = this.props.favUrl.map((url, index) => {
      return (
        <div className='picture' key={index} style={{backgroundImage: `url(${url})`}} />
      )
    })
    return (
      <div>
        <h2 onClick={this.onClick}>Favourited Images</h2>
        <ul>
          {favPic}
        </ul>
      </div>
    )
  }
}
