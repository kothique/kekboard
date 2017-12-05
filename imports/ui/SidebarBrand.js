import React from 'react'
import { Link } from 'react-router-dom'

import Component from '../Component'

import './styles/SidebarBrand.styl'

class SidebarBrand extends Component {
  render() {
    let { ...rest } = this.ownProps

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