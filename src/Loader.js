import React from 'react'
import { SyncLoader } from 'react-spinners'

export class Loader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: props.loading
    }
  }
  render () {
    return (
      <div className='sweet-loading'>
        <SyncLoader
          color={'grey'}
          loading={this.props.loading}
        />
      </div>
    )
  }
}
