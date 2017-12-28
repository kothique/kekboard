import React from 'react'
import PropTypes from 'prop-types'

import User from '../api/user'

import './styles/PageProfileChangePassword.styl'

class PageProfileChangePassword extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      newPassword: '',
      oldPassword: ''
    }
  }

  clear = () => {
    this.setState({
      error: '',
      newPassword: '',
      oldPassword: ''
    })
  }

  updateError = error => {
    this.setState({ error })
  }

  onSubmit = event => {
    const { oldPassword, newPassword } = this.state
    event.preventDefault()

    Meteor.call('user.password.change', {
      oldPassword,
      newPassword
    }, (error, result) => {
      if (error) {
        this.updateError(error.error)
        return
      }

      this.clear()
    })
  }

  render() {
    const { error, oldPassword, newPassword } = this.state

    return (
      <div id="change-password">
        <div id="change-password-error">
          {error}
        </div>

        <form onSubmit={this.onSubmit}>
          <input
            type="password"
            placeholder="Old password"
            id="change-password-old-password"
            className="form-control"
            name="old-password"
            value={oldPassword}
            onChange={event => this.setState({ oldPassword: event.target.value })}
            required />

          <input
            type="password"
            placeholder="New password"
            id="change-password-new-password"
            className="form-control"
            name="new-password"
            value={newPassword}
            onChange={event => this.setState({ newPassword: event.target.value })}
            required />

          <button
            id="change-password-submit"
            className="btn btn-primary">
            Change
          </button>
        </form>
      </div>
    )
  }
}

export default PageProfileChangePassword