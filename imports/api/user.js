import { Meteor } from 'meteor/meteor'
import { Class } from 'meteor/jagi:astronomy'

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
    emails: [Object],
    createdAt: Date,
    profile: Object,
    services: Object
  }
})

export default User