import React, { Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Header from './Header'
import Threads from './PageSectionThreads'
import FormCreateThread from './PageSectionFormCreateThread'
import FormContainer from './FormContainer'
import Section from '../api/section'

import './styles/PageSection.styl'

class PageSection extends React.Component {
  isLoading = () => !this.props.section

  render() {
    const { section } = this.props

    return (
      <article id="section">
        {this.isLoading()
          ? 'Loading...'
          : <Fragment>
              <Header title={section.name} />
              <section id="section-data" className="container">
                {Meteor.userId() &&
                  <FormContainer
                    form={FormCreateThread}
                    formProps={{ section }}
                    title="+" />
                }

                <Threads section={section} />
              </section>
            </Fragment>
        }
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