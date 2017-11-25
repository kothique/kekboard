import React from 'react'

import './Brand.css'

class Brand extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <h4 {...rest}>KEKBOARD</h4>
    )
  }
}

export default Brand