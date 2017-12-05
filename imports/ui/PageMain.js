import React from 'react'

import Component from '../Component'

import './styles/PageMain.styl'

class PageMain extends Component {
  render() {
    let { ...rest } = this.ownProps

    return (
      <article id="main" className="container" {...rest}>
        <h4 id="greeting">Welcome to Kekboard!</h4>
      </article>
    )
  }
}

export default PageMain