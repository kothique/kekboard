import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import ItemSection from './ItemSection'
import DBSection from '../api/section'

class ListSections extends React.Component {
  render() {
    const { sections, ...rest } = this.props

    let items = sections.map(section => <ItemSection section={section} key={section._id} />)

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
})(ListSections)