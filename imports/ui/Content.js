import React from 'react'

import Header from './Header'
import './Content.css'

class Content extends React.Component {
  render() {
    const { ...rest } = this.props;

    return (
      <div {...rest}>
        <Header id="header" />
      </div>
    )
  }
}

export default Content