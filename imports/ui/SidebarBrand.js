import React from 'react'

import Link from './Link'

import './styles/SidebarBrand.styl'

class SidebarBrand extends React.Component {
  render() {
    return (
      <div id="sidebar-brand">
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