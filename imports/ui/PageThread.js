import React, { Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Header from './Header'
import PageThreadPosts from './PageThreadPosts'
import ContainerFormCreate from './ContainerFormCreate'
import PageThreadFormCreatePost from './PageThreadFormCreatePost'
import Thread from '../api/thread'
import Post from '../api/post'

import './styles/PageThread.styl'

class PageThread extends React.Component {
  isLoading = () => !this.props.thread

  render() {
    const { thread } = this.props

    return (
      <article id="thread">
        {this.isLoading()
          ? 'Loading...'
          : <Fragment>
              <Header title={thread.name} />
              <section id="thread-data" className="container">
                {Meteor.userId() &&
                  <ContainerFormCreate
                    form={PageThreadFormCreatePost}
                    formProps={{ thread }} />
                }
                <PageThreadPosts thread={thread} />
              </section>
            </Fragment>
        }
      </article>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('threads')

  const { slug } = props.match.params
  const thread = Thread.findOne({ slug })

  return { thread }
})(PageThread)