import React from 'react'
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import User from '../api/user'

import './styles/PageThreadPostsItem.styl'

class PageThreadPosts extends React.Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post, author } = this.props

    return (
      <div className="page-thread-posts-item card">
        <div className="card-body">
          {post.body}
        </div>
        <div className="card-footer">
          by {author ? author.username : ''}
        </div>
      </div>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('users')

  const { post } = props
  const author = post ? undefined : User.findOne({ _id: author._id })

  return { author }
})(PageThreadPosts)