import React from 'react'
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import PostItem from './PageThreadPostsItem'
import Post from '../api/post'

import './styles/PageThreadPosts.styl'

class PageThreadPosts extends React.Component {
  static propTypes = {
    thread: PropTypes.object
  }

  render() {
    const { thread, posts } = this.props

    const items = posts.map(post =>
      <PostItem
        key={post._id}
        post={post} />
    )

    return (
      <div id="page-thread-posts">
        {items}
      </div>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('posts')

  const { thread } = props
  const posts = thread ? Post.find({ threadId: thread._id }, { sort: { createdAt: 1 } }).fetch() : []

  return { posts }
})(PageThreadPosts)