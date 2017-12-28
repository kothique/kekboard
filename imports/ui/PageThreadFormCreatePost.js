import React from 'react'
import PropTypes from 'prop-types'

import Thread from '../api/thread'

import './styles/PageThreadFormCreatePost.styl'

class PageThreadFormCreatePost extends React.Component {
  static propTypes = {
    thread: PropTypes.instanceOf(Thread).isRequired,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      postBody: ''
    }
  }

  clear = () => {
    this.setState({
      postBody: ''
    })
  }

  onCreate = event => {
    const { thread, onSuccess, onFailure } = this.props
    const { postBody } = this.state
    event.preventDefault()

    if (!postBody) {
      onFailure && onFailure('You need to type in some message')
      return
    }

    Meteor.call('posts.insert', {
      body: postBody,
      thread
    }, (error, result) => {
      if (error) {
        onFailure && onFailure(error.error)
        return
      }

      this.clear()
      onSuccess && onSuccess()
    })
  }

  onCancel = event => {
    const { onSuccess } = this.props
    event.preventDefault()

    this.clear()
    onSuccess && onSuccess()
  }

  render() {
    const { postBody } = this.state

    return (
      <form id="page-thread-create-post" onSubmit={this.onCreate}>
        <textarea
          id="form-create-post-body"
          className="form-control"
          name="body"
          placeholder="Your message here"
          value={postBody}
          onChange={event => this.setState({ postBody: event.target.value })}
          rows="4"
          required />

        <button
          id="form-create-post-create"
          className="btn btn-primary">
          Create
        </button>

        <button
          id="form-create-post-cancel"
          className="btn btn-secondary"
          type="button"
          onClick={this.onCancel}>
          Cancel
        </button>
      </form>
    )
  }
}

export default PageThreadFormCreatePost