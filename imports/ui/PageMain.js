import React from 'react'

import Header from './Header'

import './styles/PageMain.styl'

class PageMain extends React.Component {
  render() {
    return (
      <article id="main">
        <Header title="Welcome to Kekboard!" />
      </article>
    )
  }
}

export default PageMain