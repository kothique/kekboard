import React from 'react'
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import Component from '../Component'
import User from '../api/user'

import './styles/PageThreadPosts.styl'

class PageThreadPosts extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post, author, ...rest } = this.ownProps()

    return (
      <div className="page-thread-posts-item card" {...rest}>
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
})