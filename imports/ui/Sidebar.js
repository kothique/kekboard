import React from 'react'

import Brand from './Brand'
import ListSections from './ListSections'

class Sidebar extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <nav {...rest}>
        <Brand />
        <ListSections />
      </nav>
    )
  }
}

export default Sidebar