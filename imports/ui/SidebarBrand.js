import React from 'react'
import { Link } from 'react-router-dom'

import Component from '../Component'

import './styles/SidebarBrand.styl'

class SidebarBrand extends Component {
  render() {
    let { ...rest } = this.ownProps()

    return (
      <div id="sidebar-brand" {...rest}>
        <h4 id="sidebar-brand-label">
          <Link to="/">
            KEKBOARD
          </Link>
        </h4>
      </div>
    )
  }
}

export default SidebarBrand