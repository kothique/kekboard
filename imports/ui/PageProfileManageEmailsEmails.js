import React from 'react'
import PropTypes from 'prop-types'

import EmailItem from './PageProfileManageEmailsEmailsItem'

import './styles/PageProfileManageEmailsEmails.styl'

class PageProfileManageEmailsEmails extends React.Component {
  static propTypes = {
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string.isRequired,
        verified: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func
  }

  render() {
    const { emails, onSuccess, onFailure } = this.props

    const items = emails.map((email, index) =>
      <EmailItem
        key={index}
        email={email}
        onSuccess={onSuccess}
        onFailure={onFailure} />
    )

    return (
      <div id="emails">
        {items}
      </div>
    )
  }
}

export default PageProfileManageEmailsEmails