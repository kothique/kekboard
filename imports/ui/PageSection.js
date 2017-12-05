import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'

import Component from '../Component'
import Header from './Header'
import Section from '../api/section'
import Thread from '../api/thread'

import './styles/PageSection.styl'

class PageSection extends Component {
  render() {
    const { threads, sectionName, ...rest } = this.ownProps

    let items = threads.map(thread =>
      <li key={thread._id}>
        <Link to={'/t/' + thread.slug}>
          {thread.name}
        </Link>
      </li>
    )

    return (
      <article id="section">
        <Header title={sectionName} />
        <ul id="threads">
          {items}
        </ul>
      </article>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('sections')
  Meteor.subscribe('threads')

  const { shorthand } = props.match.params
  const section = Section.findOne({ shorthand })

  let threads = section ? Thread.find({ sectionId: section._id }, { sort: { createdAt: 1 } }).fetch() : []
  let sectionName = section ? section.name : ''

  return { threads, sectionName }
})(PageSection)