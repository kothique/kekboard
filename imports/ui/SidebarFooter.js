import React from 'react'

import './SidebarFooter.css'

class SidebarFooter extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <div {...rest}>
        <span id="profile">profile</span>
        <span id="quit">quit</span>
      </div>
    )
  }
}

export default SidebarFooter