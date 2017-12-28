import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

const Post = Class.create({
  name: 'Post',
  collection: new Mongo.Collection('posts'),
  fields: {
    body: {
      type: String
    },
    threadId: {
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

  Meteor.methods({
    'posts.insert'({ body, thread }) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      }

      new Post({
        body,
        threadId: thread._id,
        authorId: Meteor.userId()
      }).save()
    }
  })
 }

export default Post