import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

const Section = Class.create({
  name: 'Section',
  collection: new Mongo.Collection('sections'),
  fields: {
    name: String,
    shorthand: String
  },
  behaviors: {
    timestamp: {},
    softremove: {}
  }
})

if (Meteor.isServer) {
  Meteor.publish('sections', function() {
    return Section.find()
  })
}

export default Section