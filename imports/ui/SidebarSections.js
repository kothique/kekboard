import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import Component from '../Component'
import SidebarSectionsItem from './SidebarSectionsItem'
import Section from '../api/section'

import './styles/SidebarSections.styl'

class SidebarSections extends Component {
  render() {
    const { sections, ...rest } = this.ownProps

    let items = sections.map(section => <SidebarSectionsItem section={section} key={section._id} />)

    return (
      <ul {...rest}>
        {items}
      </ul>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('sections')

  return {
    sections: Section.find().fetch()
  }
})(SidebarSections)