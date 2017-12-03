import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Header from './Header'
import DBSection from '../api/section'
import Thread from '../api/thread'

import './styles/PageSection.css'

class PageSection extends React.Component {
  render() {
    const { threads, sectionName, ...rest } = this.props

    let items = threads.map(thread => <li key={thread._id}>{thread.name}</li>)

    return (
      <div id="section">
        <Header title={sectionName} />
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
  const section = DBSection.findOne({ shorthand })

  let threads = section ? Thread.find({ sectionId: section._id }).fetch() : []
  let sectionName = section ? section.name : ''

  return { threads, sectionName }
})(PageSection)