import React, { Component } from 'react'
import {LikeButton} from './LikeButton.js'
import {Loader} from './Loader.js'

export class IndividualPic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      urlOfPic: props.url,
      loading: props.loading
    }
    this.handleFavouriteButtonClick = this.props.handleFavouriteButtonClick
    this.loadedFinish = this.loadedFinish.bind(this)
  }
  // - to be used for loader to stop
  loadedFinish () {
    this.setState({
      loading: false
    })
    console.log('indipic', this.state.loading)
  }
  render () {
    return (
      <div>
        <img onLoad={this.loadedFinish} src={this.props.url} />
        <Loader loading={this.state.loading} />
        <LikeButton imageUrl={this.props.url} handleFavouriteButtonClick={(url) => { this.handleFavouriteButtonClick(url) }} />
      </div>
    )
  }
}
