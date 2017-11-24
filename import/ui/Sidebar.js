import React from 'react'

import ListSections from './ListSections'

class Sidebar extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <nav {...rest}>
        <ListSections />
      </nav>
    )
  }
}

export default Sidebar