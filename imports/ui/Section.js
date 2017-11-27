import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Header from './Header'
import Section from '../api/section'
import Thread from '../api/thread'

class lSection extends React.Component {
  render() {
    const { threads, ...rest } = this.props

    let items = threads.map(thread => <li key={thread._id}>{thread.name}</li>)

    return (
      <div id="section">
        <Header />
        <ul id="threads">
          {items}
        </ul>
      </div>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('sections')
  Meteor.subscribe('threads')

  const { shorthand } = props.match.params
  const section = Section.findOne({ shorthand })

  if (!section) {
    return {
      threads: []
    }
  }

  return {
    threads: Thread.find({ sectionId: section._id }).fetch()
  }
})(lSection)