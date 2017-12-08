import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Component from '../Component'

import './styles/SidebarSectionsItem.styl'

class SidebarSectionsItem extends Component {
  static propTypes = {
    section: PropTypes.object.isRequired
  }

  render() {
    const { section, ...rest } = this.ownProps()

    return (
      <div className="sidebar-sections-item card">
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