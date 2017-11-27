import React from 'react'

import Brand from './Brand'
import ListSections from './ListSections'
import SidebarFooter from './SidebarFooter'

import './Sidebar.css'

class Sidebar extends React.Component {
  render() {
    return (
      <nav id="sidebar">
        <Brand />
        <ListSections id="list-sections" />
        <SidebarFooter id="sidebar-footer" />
      </nav>
    )
  }
}

export default Sidebar