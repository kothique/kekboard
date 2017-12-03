import React from 'react'
import PropTypes from 'prop-types'

const SYM_CLOSE = '×'
const SYM_OPEN = '>'

class Toggler extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOf(['open', 'close']).isRequired
  }

  render() {
    const { onClick, ...rest } = this.props

    const msg = this.props.icon === 'open' ? SYM_OPEN : SYM_CLOSE

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