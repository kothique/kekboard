import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import '../imports/api/section'
import '../imports/api/thread'
import User from '../imports/api/user'

Meteor.startup(() => {
  Accounts.onCreateUser((options, user) => {
    let astroUser = new User
    astroUser.set(user)

    // do something with the options (none at the moment)

    return astroUser.raw()
  })
})