import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Component from '../Component'

import './styles/PageSectionThreadsItem.styl'

class PageSectionThreadsItem extends Component {
  static propTypes = {
    thread: PropTypes.object.isRequired
  }

  render() {
    const { thread, ...rest } = this.ownProps()

    return (
      <Link to={'/t/' + thread.slug}>
        <div className="threads-item card" {...rest}>
          <div className="card-body">
            {thread.name}
          </div>
        </div>
      </Link>
    )
  }
}

export default PageSectionThreadsItem