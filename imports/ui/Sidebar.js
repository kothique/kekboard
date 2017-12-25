import React from 'react'
import PropTypes from 'prop-types'

import SidebarBrand from './SidebarBrand'
import SidebarSections from './SidebarSections'
import SidebarFooter from './SidebarFooter'

import './styles/Sidebar.styl'

class Sidebar extends React.Component {
  static propTypes = {
    removed: PropTypes.bool
  }

  static defaultProps = {
    removed: false
  }

  render() {
    const { removed } = this.props

    return (
      <nav
        id="sidebar"
        className={removed ? 'removed' : ''}>

        <SidebarBrand />
        <div id="sidebar-content">
          <SidebarSections />
          <SidebarFooter />
        </div>
      </nav>
    )
  }
}

export default Sidebar