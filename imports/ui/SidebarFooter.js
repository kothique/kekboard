import React, { Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import PropTypes from 'prop-types'

import Link from './Link'

import './styles/SidebarFooter.styl'

class SidebarFooter extends React.Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    const { user } = this.props

    return (
      <div id="sidebar-footer">
        {user
          ? <Fragment>
              <Link id="sidebar-footer-profile">{user.username}</Link>
              <Link id="sidebar-footer-quit" onClick={this.quit}>quit</Link>
            </Fragment>
          : <Fragment>
              <Link to="/signin" id="sidebar-footer-sign-in">sign in</Link>
              <Link to="/signup" id="sidebar-footer-sign-up">sign up</Link>
            </Fragment>
        }
      </div>
    )
  }

  quit = () => {
    Meteor.logout()
    this.context.router.history.push('/')
  }
}

export default withTracker(props => {
  return {
    user: Meteor.user()
  }
})(SidebarFooter)