import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import '../imports/api/section'
import '../imports/api/thread'
import '../imports/api/post'
import User from '../imports/api/user'

let generate_fake_data = false // WARNING: this will replace all data in the DB

if (generate_fake_data) {
	require('../imports/scripts/generate_fake_data')
}

Meteor.startup(() => {
  Accounts.onCreateUser((options, user) => {
    let astroUser = new User
    astroUser.set(user)

    // do something with the options (none at the moment)

    return astroUser.raw()
  })
})