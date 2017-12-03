import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

const Post = Class.create({
  name: 'Post',
  collection: new Mongo.Collection('posts'),
  fields: {
    body: String,
    authorId: Number
  },
  behaviours: {
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