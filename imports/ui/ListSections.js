import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import DBSection from '../api/section'
import ItemSection from './ItemSection'

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

export default withTracker(() => ({
    sections: DBSection.find().fetch()
}))(ListSections)