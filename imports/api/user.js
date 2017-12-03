import { Meteor } from 'meteor/meteor'
import { Class } from 'meteor/jagi:astronomy'

const Email = Class.create({
  name: 'Email',
  fields: {
    address: {
      type: String
    },
    verified: {
      type: Boolean
    }
  }
})

const User = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    username: {
      type: String,
      validators: [{
        type: 'minLength',
        param: 3
      }]
    },
    emails: [Email],
    createdAt: Date,
    profile: Object,
    services: Object
  },
  behaviors: {
    softremove: {}
  }
})

export default User