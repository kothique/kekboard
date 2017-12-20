import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Component from '../Component'
import Header from './Header'
import PageSectionThreads from './PageSectionThreads'
import ContainerFormCreate from './ContainerFormCreate'
import Section from '../api/section'

import './styles/PageSection.styl'

class PageSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      createFormOpen: false
    }
  }

  render() {
    const { section, ...rest } = this.ownProps()

    return (
      <article id="section">
        <Header title={section ? section.name : ''} />
        <section id="section-data" className="container">
          <ContainerFormCreate open={this.state.createFormOpen}>
            CONTENT
          </ContainerFormCreate>
          <PageSectionThreads section={section} />
        </section>
      </article>
    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('sections')

  const { shorthand } = props.match.params
  return {
    section: Section.findOne({ shorthand })
  }
})(PageSection)