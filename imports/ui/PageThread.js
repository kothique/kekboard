import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Header from './Header'
import Thread from '../api/thread'
import Post from '../api/post'

import './styles/PageThread.css'

class PageThread extends React.Component {
  render() {
    const { posts, threadName, ...rest } = this.props

    let items = posts.map(post => <li key={post._id}>{post.body} <em>by {post.authorId}</em></li>)

    return (
      <div id="thread">
        <Header  title={threadName} />
        <ul id="posts">
          {items}
        </ul>
      </div>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('threads')
  Meteor.subscribe('posts')

  const { slug } = props.match.params
  const thread = Thread.findOne({ slug })

  let posts = thread ? Post.find({ threadId: thread._id }, { sort: { createdAt: 1 }}).fetch() : []
  let threadName = thread ? thread.name : ''

  return { posts, threadName }
})(PageThread)