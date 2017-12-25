import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import './styles/SidebarSectionsItem.styl'

class SidebarSectionsItem extends React.Component {
  static propTypes = {
    section: PropTypes.object.isRequired
  }

  render() {
    const { section } = this.props

    return (
      <div
        className="sidebar-sections-item card">

        <Link to={'/' + section.shorthand}>
          <div className="card-body">
            {section.name}
          </div>
        </Link>
      </div>
    )
  }
}

export default SidebarSectionsItem