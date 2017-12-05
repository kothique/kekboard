import React from 'react'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import PropTypes from 'prop-types'

import Component from '../Component'

import './styles/SidebarFooter.styl'

class SidebarFooter extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    const { user, ...rest } = this.ownProps()

    return user
      ? <div {...rest}>
          <span id="profile">{user.username}</span>
          <span id="quit" onClick={this.quit}>quit</span>
        </div>
      : <div {...rest}>
          <Link to="/signin" id="sign-in">sign in</Link>
          <Link to="/signup" id="sign-up">sign up</Link>
        </div>
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