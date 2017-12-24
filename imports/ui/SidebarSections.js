import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import SidebarSectionsItem from './SidebarSectionsItem'
import Section from '../api/section'

import './styles/SidebarSections.styl'

class SidebarSections extends React.Component {
  render() {
    const { sections } = this.props

    let items = sections.map(section => <SidebarSectionsItem section={section} key={section._id} />)

    return (
      <div id="sidebar-sections">
        {items}
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('sections')

  return {
    sections: Section.find().fetch()
  }
})(SidebarSections)