import React from 'react'
import PropTypes from 'prop-types'

import './styles/Header.css'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render() {
    const { title, ...rest } = this.props

    return (
      <header id="header" {...rest}>
        <h4>{this.props.title}</h4>
      </header>
    )
  }
}

export default Header