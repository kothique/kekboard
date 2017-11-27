import React from 'react'

import Brand from './Brand'
import ListSections from './ListSections'
import SidebarFooter from './SidebarFooter'

import './Sidebar.css'

class Sidebar extends React.Component {
  render() {
    let { ...rest } = this.props

    return (
      <nav id="sidebar" {...rest}>
        <Brand />
        <ListSections id="list-sections" />
        <SidebarFooter id="sidebar-footer" />
      </nav>
    )
  }
}

export default Sidebar