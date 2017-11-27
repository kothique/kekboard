import React from 'react'

import './Header.css'

class Header extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <div id="header" {...rest}>
        <h4>Header</h4>
      </div>
    )
  }
}

export default Header