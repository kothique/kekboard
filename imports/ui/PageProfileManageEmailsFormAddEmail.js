import React from 'react'
import PropTypes from 'prop-types'

import './styles/PageProfileManageEmailsFormAddEmail.styl'

const BTN_TEXT = '+'

class PageProfileManageEmailsFormAddEmail extends React.Component {
  static propTypes = {
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      newEmail: ''
    }
  }

  clear = () => {
    this.setState({
      newEmail: ''
    })
  }

  onSubmit = event => {
    const { onSuccess, onFailure } = this.props
    const { newEmail } = this.state
    event.preventDefault()

    if (!newEmail) {
      onFailure && onFailure('No email specified')
      return
    }

    Meteor.call('user.emails.insert', {
      address: newEmail
    }, (error, result) => {
      if (error) {
        onFailure && onFailure(error.error)
        return
      }

      this.clear()
      onSuccess && onSuccess()
    })
  }

  render() {
    const { newEmail } = this.state

    return (
      <div id="add-email">
        <form onSubmit={this.onSubmit}>
          <input
            id="add-email-email"
            className="form-control"
            placeholder="New email"
            type="email"
            name="email"
            value={newEmail}
            onChange={event => { this.setState({ newEmail: event.target.value })}}
            required />

          <button
            id="add-email-submit"
            className="btn btn-success">
            {BTN_TEXT}
          </button>
        </form>
      </div>
    )
  }
}

export default PageProfileManageEmailsFormAddEmail