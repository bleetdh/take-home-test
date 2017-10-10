import React, { Component } from 'react'
import './App.css'
import {Picture} from './Picture.js'
import {Favourite} from './Favourite.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picDisplay: 'inline',
      favDisplay: 'none',
      favouriteUrlArr: []
    }
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleFavouriteClick = this.handleFavouriteClick.bind(this)
  }
  // - for toogling between search and fav
  // - use display so as to not 'reload' page upon click
  handleSearchClick (e) {
    this.setState({
      picDisplay: 'inline',
      favDisplay: 'none'
    })
  }
  handleFavouriteClick (e) {
    this.setState({
      picDisplay: 'none',
      favDisplay: 'inline'
    })
  }
  // - to pass down this function to Picture, then to LikeButton
  handleFavouriteButtonClick (url) {
    this.setState({
      favouriteUrlArr: this.state.favouriteUrlArr.concat([url])
    })
    console.log(this.state.favouriteUrlArr)
  }

  render () {
    return (
      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Gallereasy | <a href='#' onClick={this.handleSearchClick}>Search</a> <a href='#' onClick={this.handleFavouriteClick}>Favourites</a></h1>
        </header>

        <div className='picturediv' style={{display: this.state.picDisplay}}>
          <Picture handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }} />
        </div>

        <div className='favdiv' style={{display: this.state.favDisplay}}>
          <Favourite favUrl={this.state.favouriteUrlArr} />
        </div>

        <div className='footer'>
          <span>Gallereasy POC Web app</span><span className='rightside'>2359 Media</span>
        </div>
      </div>
    )
  }
}

export default App
