import React, { Component } from 'react'
import './App.css'
import {Picture} from './Picture.js'
import {Favourite} from './Favourite.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picDisplay: 'inline',
      favDisplay: 'none'
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
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Gallereasy | <a href='#' onClick={this.handleSearchClick}>Search</a> <a href='#' onClick={this.handleFavouriteClick}>Favourites</a></h1>
        </header>
        <div className='picturediv' style={{display: this.state.picDisplay}}>
          <Picture />
        </div>
        <div className='favdiv' style={{display: this.state.favDisplay}}>
          <Favourite />
        </div>
        {/* {displayedComponent} */}
        <div className='footer'>
          <span>Gallereasy POC Web app</span><span className='rightside'>2359 Media</span>
        </div>
      </div>
    )
  }
}

export default App
