import React from 'react'
import PropTypes from 'prop-types'

import User from '../api/user'
import AddEmail  from './PageProfileManageEmailsFormAddEmail'
import Emails from './PageProfileManageEmailsEmails'

import './styles/PageProfileManageEmails.styl'

class PageProfileManageEmails extends React.Component {
  static propTypes = {
    user: PropTypes.instanceOf(User).isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      error: ''
    }
  }

  updateError = error => { this.setState({ error } ) }

  render() {
    const { user: { emails } } = this.props
    const { error } = this.state

    return (
      <article id="profile">
        <div id="page-profile-manage-emails-error">
          {error}
        </div>

        <AddEmail
          onFailure={this.updateError}
          onSuccess={this.updateError} />
        <Emails
          emails={emails}
          onFailure={this.updateError}
          onSuccess={this.updateError} />
      </article>
    )
  }
}

export default PageProfileManageEmails