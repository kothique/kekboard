import React from 'react'

import Brand from './Brand'
import ListSections from './ListSections'
import SidebarFooter from './SidebarFooter'

import './Sidebar.css'

class Sidebar extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <nav {...rest}>
        <Brand id="brand" />
        <ListSections id="list-sections" />
        <SidebarFooter id="sidebar-footer" />
      </nav>
    )
  }
}

export default Sidebar