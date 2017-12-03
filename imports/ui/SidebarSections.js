import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import SidebarSectionsItem from './SidebarSectionsItem'
import DBSection from '../api/section'

class SidebarSections extends React.Component {
  render() {
    const { sections, ...rest } = this.props

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
    sections: DBSection.find().fetch()
  }
})(SidebarSections)