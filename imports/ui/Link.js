import React from 'react'
import PropTypes from 'prop-types'
import RRD from 'react-router-dom'

import './styles/Link.styl'

class Link extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    target: PropTypes.string,
    replace: PropTypes.bool,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }

  static defaultProps = {
    replace: false
  }

  render() {
    const { onClick, target, replace, to, children, ...props } = this.props

    if (typeof to === 'undefined') {
      return (
        <a
          {...props}
          href=""
          onClick={event => {
            event.preventDefault()
            onClick && onClick(event)
          }}>

          {children}
        </a>
      )
    } else {
      return (
        <RRD.Link
          {...props}
          onClick={onClick}
          target={target}
          replace={replace}
          to={to}>

          {children}
        </RRD.Link>
      )
    }
  }
}

export default Link