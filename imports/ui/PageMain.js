import React from 'react'

import './styles/PageMain.styl'

class PageMain extends React.Component {
  render() {
    let { staticContext, ...rest } = this.props

    return (
      <div id="main" className="container" {...rest}>
        <h4 id="greeting">Welcome to Kekboard!</h4>
      </div>
    )
  }
}

export default PageMain