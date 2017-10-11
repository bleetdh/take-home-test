import React from 'react'
import ReactLoading from 'react-loading'

export const Loader = ({ type, color }) => (
  <ReactLoading type='spin' color='black' height='50px' width='50px' className='loader' />
)
