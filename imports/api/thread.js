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

if (Meteor.isServer) {
  Meteor.publish('threads', function() {
    return Thread.find()
  })
}

export default Thread