import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

const Thread = Class.create({
  name: 'Thread',
  collection: new Mongo.Collection('threads'),
  fields: {
    name: {
      type: String,
    },
    sectionId: {
      type: String,
      index: 1
    },
    authorId: {
      type: String,
      index: 1
    }
  },
  behaviors: {
    timestamp: {},
    softremove: {},
    slug: {
      fieldName: 'name'
    }
  }
})

if (Meteor.isServer){
  Meteor.publish('threads', function() {
    return Thread.find()
  })
}

Meteor.methods({
  'threads.insert'({ name, section }) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('Not authorized')
    }

    if (Thread.findOne({ name, sectionId: section._id })) {
      throw new Meteor.Error('The name has been already taken')
    }

    new Thread({
      name,
      sectionId: section._id,
      authorId: Meteor.userId()
    }).save()
  }
})

export default Thread