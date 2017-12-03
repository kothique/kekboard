import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SidebarSectionsItem extends React.Component {
  static propTypes = {
    section: PropTypes.object.isRequired
  }

  render() {
    const { section, ...rest } = this.props

    return (
      <li>
        <Link to={'/' + section.shorthand}>
          {section.name}
        </Link>
      </li>
    )
  }
}

export default SidebarSectionsItem