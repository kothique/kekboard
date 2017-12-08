import React from 'react'
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import Component from '../Component'
import Post from '../api/post'
import PageThreadPostsItem from './PageThreadPostsItem'

import './styles/PageThreadPosts.styl'

class PageThreadPosts extends Component {
  static propTypes = {
    thread: PropTypes.object
  }

  render() {
    const { thread, posts, ...rest } = this.ownProps()

    const items = posts.map(post =>
      <PageThreadPostsItem
        key={post._id}
        post={post} />
    )

    return (
      <div id="page-thread-posts" {...rest}>
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