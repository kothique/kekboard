import React from 'react'
import PropTypes from 'prop-types'

import './styles/Header.styl'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render() {
    const { title } = this.props

    return (
      <header id="header">
        <h4 id="header-title">{title}</h4>
      </header>
    )
  }
}

export default Header