import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
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

if (Meteor.isServer) {
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

    'user.emails.remove'({ address }) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      }

      let user = User.findOne({ _id: Meteor.userId() })
      let left = user.emails.filter(({ address_ }) => address != address_)

      if (!left.some(email => email.verified)) {
        throw new Meteor.Error('At least one verified email is required')
      }

      Accounts.removeEmail(Meteor.userId(), address)
    },

    'user.password.change'({ oldPassword, newPassword }) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      }

      let user = User.findOne({ _id: Meteor.userId() })

      if (Accounts._checkPassword(Meteor.user(), oldPassword).error) {
        throw new Meteor.Error('Incorrect password')
      }

      Accounts.setPassword(Meteor.userId(), newPassword, { logout: false })
    }
  })
}

export default User