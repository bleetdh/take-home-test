import React, { Component } from 'react'

export class Picture extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picUrl: []
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  // handling API CALL
  handleKeyUp (e) {
    // alert('hello')
    console.log(e.target.value)
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=rRROY9dnpDWINQuHrcFXhjaa00nLqPPw&q=' + e.target.value + '&limit=8&offset=0&rating=G&lang=en'
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
      for (var i = 0; i < results.length; i++) {
        picUrlArrayToUpdate.push(results[i].images.original.url)
      }
      console.log('picUrlArrayToUpdate', picUrlArrayToUpdate)
      this.setState({
        picUrl: picUrlArrayToUpdate
      })
    })
  }

  render () {
    let displayPic = this.state.picUrl.map((url, index) => {
      return (<img src={url} key={index} />)
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
