import React, { Component } from 'react'
import {LikeButton} from './LikeButton.js'

export class Picture extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picUrl: [],
      isMouseInside: false
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  // - handling API CALL
  handleKeyUp (e) {
    // alert('hello')
    // console.log(e.target.value)
    // - url for API to be changed
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=rRROY9dnpDWINQuHrcFXhjaa00nLqPPw&q=' + e.target.value + '&limit=8&offset=0&rating=G&lang=en'
    // - setState to empty so that array is constantly refreshing with latest results
    this.setState({
      picUrl: []
    })

    fetch(url)
    .then((response) => {
      // console.log(response)
      return response.json()
    })
    .then((data) => {
      // console.log(data)
      var results = (data.data)
      var picUrlArrayToUpdate = []
      // - to push wanted results into empty array
      for (var i = 0; i < results.length; i++) {
        picUrlArrayToUpdate.push(results[i].images.original.url)
      }
      // console.log('picUrlArrayToUpdate', picUrlArrayToUpdate)
      // - giving picUrl the updated array
      this.setState({
        picUrl: picUrlArrayToUpdate
      })
    })
  }

  // - handling hovering
  mouseEnter () {
    this.setState({ isMouseInside: true })
    // console.log(this.state.isMouseInside)
  }

  mouseLeave () {
    this.setState({ isMouseInside: false })
    // console.log(this.state.isMouseInside)
  }

  render () {
    // - for display of pictures
    let displayPic = this.state.picUrl.map((url, index) => {
      return (
        <div className='picture' key={index} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{backgroundImage: `url(${url})`}}>
          <LikeButton key={index} isMouseInside={this.state.isMouseInside} />
        </div>
      )
    })
    return (
      <div>
        <h1>hello</h1>
        <form>
          <input type='text' onKeyUp={this.handleKeyUp} placeholder='Start searching for images!' />
        </form>
        <ul>
          {displayPic}
        </ul>
      </div>
    )
  }
}
