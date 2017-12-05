import React from 'react'
import { Link } from 'react-router-dom'

import './styles/SidebarBrand.styl'

class SidebarBrand extends React.Component {
  render() {
    let { ...rest } = this.props

    return (
      <h4 id="sidebar-brand" {...rest}>
        <Link to="/">
          KEKBOARD
        </Link>
      </h4>
    )
  }
}

export default SidebarBrand