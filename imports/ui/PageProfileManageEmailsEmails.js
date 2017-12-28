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

  removeEmailCallback = index => () => {
    const { onSuccess, onFailure } = this.props

    Meteor.call('user.emails.remove', {
      index
    }, (error, result) => {
      if (error) {
        onFailure && onFailure(error.error)
        return
      }

      onSuccess && onSuccess()
    })
  }

  render() {
    const { emails } = this.props

    const items = emails.map((email, index) =>
      <EmailItem
        key={index}
        email={email}
        onRemove={this.removeEmailCallback(index)} />
    )

    return (
      <div id="emails">
        {items}
      </div>
    )
  }
}

export default PageProfileManageEmailsEmails