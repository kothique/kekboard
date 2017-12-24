import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import PropTypes from 'prop-types'

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
              <span id="sidebar-footer-profile">{user.username}</span>
              <span id="sidebar-footer-quit" onClick={this.quit}>quit</span>
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