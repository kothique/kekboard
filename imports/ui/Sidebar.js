import React from 'react'
import PropTypes from 'prop-types'

import Brand from './SidebarBrand'
import Sections from './SidebarSections'
import Footer from './SidebarFooter'

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

        <Brand />
        <div id="sidebar-content">
          <Sections />
          <Footer />
        </div>
      </nav>
    )
  }
}

export default Sidebar