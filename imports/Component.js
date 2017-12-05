import React from 'react'

class Component extends React.Component {
  ownProps() {
    const { match, location, history, staticContext, ...rest } = this.props

    return rest
  }
}

export default Component