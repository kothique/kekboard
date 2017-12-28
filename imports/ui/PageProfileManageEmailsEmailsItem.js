import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import './styles/PageProfileManageEmailsEmailsItem.styl'

const BTN_TEXT = '-'

class PageProfileManageEmailsEmailsItem extends React.Component {
  static propTypes = {
    email: PropTypes.shape({
      address: PropTypes.string.isRequired,
      verified: PropTypes.bool.isRequired
    }).isRequired,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func
  }

  removeEmail = event => {
    const { email: { address }, onSuccess, onFailure } = this.props
    event.preventDefault()

    Meteor.call('user.emails.remove', {
      address
    }, (error, result) => {
      if (error) {
        onFailure && onFailure(error.error)
        return
      }

      onSuccess && onSuccess()
    })
  }

  render() {
    const { email: { address, verified } } = this.props

    const message = verified
      ? ''
      : <div className="email-message">
          Please check your email inbox for verification. <Link>Resend</Link>
        </div>

    return (
      <div className="email">
        <div className="email-address card card-body">
          <div className="email-title">
            {address}
          </div>

          {message}
        </div>

        <button
          onClick={this.removeEmail}
          className="email-remove btn btn-danger">
          {BTN_TEXT}
        </button>
      </div>
    )
  }
}

export default PageProfileManageEmailsEmailsItem