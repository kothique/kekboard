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
    createdAt: {
      type: Date,
      optional: true
    },
    profile: {
      type: Object,
      optional: true
    },
    services: {
      type: Object,
      optional: true
    }
  },
  behaviors: {
    softremove: {}
  }
})

Meteor.methods({
  'user.emails.insert'({ address }) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('Not authorized')
    }

    if (User.findOne({ emails: { $elemMatch: { address } } })) {
      throw new Meteor.Error('This email has already been taken')
    }

    let user = User.findOne({ _id: Meteor.userId() })
    user.emails.push({ address, verified: false })
    user.save()
  },

  'user.emails.remove'({ index }) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('Not authorized')
    }

    let user = User.findOne({ _id: Meteor.userId() })

    if (typeof user.emails[index] === 'undefined') {
      throw new Meteor.Error('The specified email does not exist')
    }

    let left = user.emails.filter((email, index_) => index != index_)
    let verified = left.filter(({ verified }) => verified)

    if (verified.length == 0) {
      throw new Meteor.Error('At least one verified email is required')
    }

    user.emails.splice(index, 1)
    user.save()
  }
})

export default User