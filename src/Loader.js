import React from 'react'
import { BarLoader } from 'react-spinners'

export class Loader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  render () {
    return (
      <div className='sweet-loading'>
        <BarLoader
          color={'grey'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
