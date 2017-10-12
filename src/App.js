import React, { Component } from 'react'
import './App.css'
import {Pictures} from './Pictures.js'
import {Favourites} from './Favourites.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picDisplay: 'inline',
      favDisplay: 'none',
      favouriteUrlArr: [] // - need to pass this state all the way down to LikeButton component
    }
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleFavouriteClick = this.handleFavouriteClick.bind(this)
  }
  // - for toogling between search and favourite component to appear
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
  // - to pass down this function to Picture,then to IndividualPic then to LikeButton component
  handleFavouriteButtonClick (url) {
    let favouriteUrlArr = this.state.favouriteUrlArr
    // - check to see if favouriteUrlArr has the url
    // - if no, add in url
    // - if yes, remove url
    if (!(favouriteUrlArr.includes(url))) {
      this.setState({
        favouriteUrlArr: favouriteUrlArr.concat([url])
      })
    } else {
      favouriteUrlArr.splice(favouriteUrlArr.indexOf(url), 1)
      this.setState({
        favouriteUrlArr: favouriteUrlArr
      })
    }
  }

  render () {
    return (
      <div id='container'>
        {/* <a> to be used for clicking to change between Pic and Fav Component */}
        <header id='header'>
          <h1 className='App-title'>Galler<span className='bold'>easy</span> | <a href='#' onClick={this.handleSearchClick}>Search</a> <a href='#' onClick={this.handleFavouriteClick}>Favourites({this.state.favouriteUrlArr.length})</a></h1>
        </header>
        <div id='body'>
          {/* where Picture Component is */}
          <div style={{display: this.state.picDisplay}}>
            <Pictures
              favouriteUrlArr={this.state.favouriteUrlArr}
              handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }}
            />
          </div>
          {/* where Favourite Component is */}
          <div style={{display: this.state.favDisplay}}>
            <Favourites favUrl={this.state.favouriteUrlArr}
              handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }}
             />
          </div>
        </div>

        <div id='footer'>
          <span>Gallereasy POC Web app</span><span className='rightside'>2359 Media</span>
        </div>
      </div>
    )
  }
}

export default App
