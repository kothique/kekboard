import React from 'react'
import PropTypes from 'prop-types'

import Component from '../Component'

import './styles/Toggler.styl'

const SYM_CLOSE = '×'
const SYM_OPEN = '>'

class Toggler extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOf(['open', 'close']).isRequired
  }

  render() {
    const { icon, ...rest } = this.ownProps()

    const text = icon === 'open' ? SYM_OPEN : SYM_CLOSE

    return (
      <span
        style={{ cursor: 'pointer' }}
        {...rest}>
        {text}
      </span>
    )
  }
}

export default Toggler