import React from 'react'
import PropTypes from 'prop-types'

class ItemSection extends React.Component {
  static propTypes = {
    section: PropTypes.object.isRequired
  }

  render() {
    const { section, ...rest } = this.props

    return (
      <li {...rest}>{section.name}</li>
    )
  }
}

export default ItemSection