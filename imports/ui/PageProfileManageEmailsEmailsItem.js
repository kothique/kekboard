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
    onRemove: PropTypes.func
  }

  render() {
    const { email: { address, verified }, onRemove } = this.props

    const message = verified
      ? ''
      : <div className="email-message">
          Please check your email inbox for verification. <Link>Resend</Link>
        </div>

    return (
      <div className="email">
        <div className="card card-body">
          <div className="email-address">
            {address}
          </div>

          {message}
        </div>

        <button
          onClick={onRemove}
          className="emails-remove btn btn-danger">
          {BTN_TEXT}
        </button>
      </div>
    )
  }
}

export default PageProfileManageEmailsEmailsItem