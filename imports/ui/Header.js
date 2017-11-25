import React from 'react'

import './Header.css'

class Header extends React.Component {
  render() {
    const { ...rest } = this.props

    return (
      <div {...rest}>
        <h4>THREAD NAME</h4>
      </div>
    )
  }
}

export default Header