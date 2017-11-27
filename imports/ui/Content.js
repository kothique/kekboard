import React from 'react'

import Header from './Header'
import Main from './Main'
import './Content.css'

const defaultPage = 'main'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: defaultPage
    }
  }
  render() {
    const { ...rest } = this.props;

    switch (this.state.currentPage) {
      case 'main':
        currentPageHtml = <Main />
        break;
      default:
        currentPageHtml = <h4 style={{ textAlign: 'center' }}>404 - Page Not Found</h4>
        break;
    }

    return (
      <div {...rest}>
        <Header id="header" />

        {currentPageHtml}
      </div>
    )
  }
}

export default Content