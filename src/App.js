import React, { Component } from 'react'
import './App.css'
import {Picture} from './Picture.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Gallereasy</h1>
        </header>
        <Picture />
      </div>
    )
  }
}

export default App
