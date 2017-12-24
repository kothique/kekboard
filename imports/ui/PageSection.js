import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Header from './Header'
import PageSectionThreads from './PageSectionThreads'
import PageSectionFormCreateThread from './PageSectionFormCreateThread'
import ContainerFormCreate from './ContainerFormCreate'
import Section from '../api/section'

import './styles/PageSection.styl'

class PageSection extends React.Component {
  constructor(props) {
    super(props)
  }

  isLoading = () => !this.props.section

  render() {
    const { section } = this.props

    if (this.isLoading()) {
      return (
        <article id="section">
          Loading...
        </article>
      )
    } else {
      return (
        <article id="section">
          <Header title={section.name} />
          <section id="section-data" className="container">
            <ContainerFormCreate
              form={PageSectionFormCreateThread}
              formProps={{ section }} />

            <PageSectionThreads section={section} />
          </section>
        </article>
      )
    }
  }
}

export default withTracker(props => {
  Meteor.subscribe('sections')

  const { shorthand } = props.match.params
  return {
    section: Section.findOne({ shorthand })
  }
})(PageSection)