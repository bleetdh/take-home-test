import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMouseInside: props.isMouseInside,
      isItLike: false
    }
  }

  render () {
    if (this.props.isMouseInside) {
      return (
        <div>
          <button>like</button>
          {/* {this.state.isMouseInside ? <button>like</button> : null} */}
        </div>
      )
    } else return null
  }
}
