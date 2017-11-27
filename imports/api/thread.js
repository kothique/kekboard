import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

const Thread = Class.create({
  name: 'Thread',
  collection: new Mongo.Collection('threads'),
  fields: {
    name: String,
    sectionId: String,
    authorId: String,
  },
  behaviours: {
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