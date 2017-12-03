import React from 'react'

import './styles/PageMain.css'

class PageMain extends React.Component {
  render() {
    let { staticContext, ...rest } = this.props

    return (
      <h4 style={{ textAlign: 'center' }} {...rest}>Welcome to Kekboard!</h4>
    )
  }
}

export default PageMain