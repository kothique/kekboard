import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Component from '../Component'
import Header from './Header'
import PageThreadPosts from './PageThreadPosts'
import Thread from '../api/thread'
import Post from '../api/post'

import './styles/PageThread.styl'

class PageThread extends Component {
  render() {
    const { thread, ...rest } = this.ownProps()

    return (
      <article id="thread" {...rest}>
        <Header  title={thread ? thread.name : ''} />
        <PageThreadPosts
          thread={thread} />
      </article>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('threads')

  const { slug } = props.match.params
  const thread = Thread.findOne({ slug })

  return { thread }
})(PageThread)