import React from 'react'

import Component from '../Component'
import SidebarBrand from './SidebarBrand'
import SidebarSections from './SidebarSections'
import SidebarFooter from './SidebarFooter'

import './styles/Sidebar.styl'

class Sidebar extends Component {
  render() {
    let { ...rest } = this.ownProps

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