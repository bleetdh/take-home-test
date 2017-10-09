import React, { Component } from 'react'

export class Picture extends Component {
  // handling API CALL
  handleClick (e) {
    e.preventDefault()
    // alert('hello')
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=rRROY9dnpDWINQuHrcFXhjaa00nLqPPw&q=cat&limit=8&offset=0&rating=G&lang=en'

    fetch(url)
    .then((response) => {
      // console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
  }

  render () {
    return (
      <div>
        <h1>hello</h1>
        <form>
          <input type='text' placeholder='Start searching for images!' />
          <button onClick={this.handleClick}>search!</button>
        </form>
      </div>
    )
  }
}
