import React from 'react'

import './Main.css'

class Main extends React.Component {
  render() {
    let { staticContext, ...rest } = this.props

    return (
      <h4 style={{ textAlign: 'center' }} {...rest}>Welcome to Kekboard!</h4>
    )
  }
}

export default Main