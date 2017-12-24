import React from 'react'
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import PageSectionThreadsItem from './PageSectionThreadsItem'
import Thread from '../api/thread'

import './styles/PageSectionThreads.styl'

class PageSectionThreads extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    const { section, threads } = this.props

    const items = threads.map(thread =>
      <PageSectionThreadsItem
        key={thread._id}
        thread={thread} />
    )

    return (
      <div id="page-section-threads">
        {items}
      </div>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('threads')

  const { section } = props
  const threads = section ? Thread.find({ sectionId: section._id }, { sort: { createdAt: 1 } }).fetch() : []

  return { threads }
})(PageSectionThreads)