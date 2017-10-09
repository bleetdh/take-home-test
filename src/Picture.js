import React, { Component } from 'react'

export class Picture extends Component {
  // handling API CALL
  handleKeyUp (e) {
    // alert('hello')
    console.log(e.target.value)
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=rRROY9dnpDWINQuHrcFXhjaa00nLqPPw&q=' + e.target.value + '&limit=8&offset=0&rating=G&lang=en'

    fetch(url)
    .then((response) => {
      // console.log(response)
      return response.json()
    })
    .then((data) => {
      // console.log(data)
      var picture = (data.data[0].images.original.url)
      console.log(picture)
    })
  }

  render () {
    return (
      <div>
        <h1>hello</h1>
        <form>
          <input type='text' onKeyUp={this.handleKeyUp} placeholder='Start searching for images!' />
        </form>
      </div>
    )
  }
}
