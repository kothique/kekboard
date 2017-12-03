import React from 'react'

import SidebarBrand from './SidebarBrand'
import SidebarSections from './SidebarSections'
import SidebarFooter from './SidebarFooter'

import './styles/Sidebar.css'

class Sidebar extends React.Component {
  render() {
    let { ...rest } = this.props

    return (
      <nav id="sidebar" {...rest}>
        <SidebarBrand />
        <SidebarSections id="list-sections" />
        <SidebarFooter id="sidebar-footer" />
      </nav>
    )
  }
}

export default Sidebar