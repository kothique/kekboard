import React from 'react'
import PropTypes from 'prop-types'

import Component from '../Component'

import './styles/Header.styl'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render() {
    const { title, ...rest } = this.ownProps()

    return (
      <header id="header" {...rest}>
        <h4>{title}</h4>
      </header>
    )
  }
}

export default Header