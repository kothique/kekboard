import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

const Post = Class.create({
  name: 'Post',
  collection: new Mongo.Collection('posts'),
  fields: {
    body: {
      type: String
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
    softremove: {}
  }
})

if (Meteor.isServer) {
  Meteor.publish('posts', function() {
    return Post.find()
  })
}

export default Post