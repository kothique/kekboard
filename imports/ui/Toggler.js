import React from 'react'
import PropTypes from 'prop-types'

import './styles/Toggler.styl'

const SYM_CLOSE = '×'
const SYM_OPEN = '>'

class Toggler extends React.Component {
  static propTypes = {
    sidebarRemoved: PropTypes.bool.isRequired,
    onClick: PropTypes.func
  }

  render() {
    const { sidebarRemoved, onClick } = this.props

    const text = sidebarRemoved ? SYM_OPEN : SYM_CLOSE

    return (
      <div
        id="toggler"
        style={{ cursor: 'pointer' }}
        onClick={onClick}
        className={sidebarRemoved ? 'sidebar-removed' : ''}
      >
        {text}
      </div>
    )
  }
}

export default Toggler