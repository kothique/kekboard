import React from 'react'
import PropTypes from 'prop-types'

class Toggler extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOf(['open', 'close']).isRequired
  }

  render() {
    const { onClick, ...rest } = this.props

    const msg = this.props.icon === 'open' ? '>' : '×'

    return (
      <span
        onClick={onClick}
        style={{ cursor: 'pointer' }}
        {...rest}>
        {msg}
      </span>
    )
  }
}

export default Toggler