import React from 'react'
import PropTypes from 'prop-types'

import Component from '../Component'
import Section from '../api/section'

import './styles/PageSectionFormCreateThread.styl'

class PageSectionFormCreateThread extends Component {
  static propTypes = {
    section: PropTypes.instanceOf(Section).isRequired,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      threadName: ''
    }
  }

  clear = () => {
    this.setState({
      threadName: ''
    })
  }

  onCreate = event => {
    event.preventDefault()

    const { section, onSuccess, onFailure } = this.props
    const { threadName } = this.state

    if (!threadName) {
      onFailure && onFailure('You need to specify the name')
      return
    }

    Meteor.call('threads.insert', {
      name: threadName,
      section
    }, (error, result) => {
      if (error) {
        onFailure && onFailure(error.error)
        return
      }

      this.clear()
      onSuccess && onSuccess()
    })
  }

  onCancel = () => {
    const { onSuccess } = this.props

    this.clear()

    onSuccess && onSuccess()
  }

  render() {
    const { ...rest } = this.ownProps()
    const { threadName } = this.state

    return (
      <form id="form-create-thread" onSubmit={this.onCreate}>
        <input
          className="form-control"
          type="text"
          id="form-create-thread-name"
          name="name"
          placeholder="Thread name"
          value={threadName}
          onChange={event => { this.setState({ threadName: event.target.value }) }}
          required />

        <button
          id="form-create-thread-ok"
          className="btn btn-primary">
          Create
        </button>

        <button
          id="form-create-thread-cancel"
          className="btn btn-secondary"
          type="button"
          onClick={this.onCancel}>
          Cancel
         </button>
      </form>
    )
  }
}

export default PageSectionFormCreateThread