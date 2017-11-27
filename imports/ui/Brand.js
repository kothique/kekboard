import React from 'react'
import { Link } from 'react-router-dom'

import './Brand.css'

class Brand extends React.Component {
  render() {
    let { ...rest } = this.props

    return (
      <h4 id="brand" {...rest}>
        <Link to="/">
          KEKBOARD
        </Link>
      </h4>
    )
  }
}

export default Brand