import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles/PageSectionThreadsItem.styl'

class PageSectionThreadsItem extends React.Component {
  static propTypes = {
    thread: PropTypes.object.isRequired
  }

  render() {
    const { thread } = this.props

    return (
      <Link to={'/t/' + thread.slug}>
        <div className="page-section-threads-item card">
          <div className="card-body">
            {thread.name}
          </div>
        </div>
      </Link>
    )
  }
}

export default PageSectionThreadsItem