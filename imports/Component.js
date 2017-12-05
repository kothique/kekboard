import React from 'react'

class Component extends React.Component {
  constructor(props) {
    super(props)

    // set this.ownProps to prevnt some props like match and history
    // from getting into the DOM as attributes
    const { match, location, history, staticContext, ...rest } = props
    this.ownProps = rest
  }
}

export default Component