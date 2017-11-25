import React from 'react'

import './Brand.css'

class Brand extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <h3 {...rest}>Kekboard</h3>
    )
  }
}

export default Brand