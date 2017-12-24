import React from 'react'

import SidebarBrand from './SidebarBrand'
import SidebarSections from './SidebarSections'
import SidebarFooter from './SidebarFooter'

import './styles/Sidebar.styl'

class Sidebar extends React.Component {
  render() {
    return (
      <nav id="sidebar">
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