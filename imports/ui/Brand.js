import React from 'react'

import './Brand.css'

class Brand extends React.Component {
  render() {
    let { ...rest } = this.props

    return (
      <h4 id="brand" {...rest}>KEKBOARD</h4>
    )
  }
}

export default Brand