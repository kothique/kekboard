import React, { Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import User from '../api/user'
import Header from './Header'
import ChangePassword from './PageProfileChangePassword'
import ManageEmails from './PageProfileManageEmails'

import './styles/PageProfile.styl'

class PageProfile extends React.Component {
  isLoading = () => !this.props.user

  render() {
    const { user } = this.props

    return (
      <article id="profile">
        <Header title="Profile" />

        <div id="content" className="container">
          {this.isLoading()
            ? 'Loading...'
            : <Fragment>
                <ChangePassword user={user} />
                <ManageEmails user={user} />
              </Fragment>
          }
        </div>
      </article>
    )
  }
}

export default withTracker(props => {
  return {
    user: User.findOne({ _id: Meteor.userId() })
  }
})(PageProfile)