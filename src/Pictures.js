import React, { Component } from 'react'
import {IndividualPic} from './IndividualPic.js'

export class Pictures extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picUrlArr: [],
      loading: true
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    // - need to pass this down again to LikeButton
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
  }

  // - trigger and handling API CALL
  handleKeyUp (e) {
    console.log('picture', this.state.loading)
    // - url for API, e.target.value is the one that is changing
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=rRROY9dnpDWINQuHrcFXhjaa00nLqPPw&q=' + e.target.value + '&limit=8&offset=0&rating=G&lang=en'
    // - setState to empty so that array is constantly refreshing with latest results
    this.setState({
      picUrlArr: [],
      loading: true
    })
    if (e.target.value.length > 0) {
      // - when user starts typing, to fetch url and pushed into picUrlArrayToUpdate
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          var results = (data.data)
          var picUrlArrayToUpdate = []
          // - to push wanted results into empty array
          for (var i = 0; i < results.length; i++) {
            picUrlArrayToUpdate.push(results[i].images.original.url)
          }
          // - giving picUrlArr the updated array
          this.setState({
            picUrlArr: picUrlArrayToUpdate
          })
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      // - in the event that input field is empty
      this.setState({
        picUrlArr: []
      })
    }
  }

  render () {
    if (this.state.picUrlArr.length > 0) {
      // - for passing of url of pictures to IndividualPic component
      let displayPic = this.state.picUrlArr.map((url, index) => {
        return (
          <div className='picture' key={index} >
            <IndividualPic
              url={url}
              loading={this.state.loading}
              favouriteUrlArr={this.props.favouriteUrlArr}
              handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }} />
          </div>
        )
      })
      return (
        <div className='picturediv'>
          <form>
            <input type='text' onKeyUp={this.handleKeyUp} placeholder='Start searching for images!' />
          </form>
          {displayPic}
        </div>
      )
    } else {
      // - if no results yield
      return (
        <div>
          <form>
            <input type='text' onKeyUp={this.handleKeyUp} placeholder='Start searching for images!' />
          </form>
          <p className='noresults'>No results found</p>
        </div>
      )
    }
  }
}
