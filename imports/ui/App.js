import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Sidebar from './Sidebar'
import Toggler from './Toggler'
import Main from './Main'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hideSidebar: false,
      currentPage: 'main'
    }
  }

  render() {
    let currentPageHtml = <h4 style={{ textAlign: 'center' }}>404 - Page Not Found</h4>
    if (this.state.currentPage === 'main') {
        currentPageHtml = <Main />
    }

    return (
      <div>
        <Sidebar
          className={'' + (this.state.hideSidebar ? ' hidden' : '')} />

        <div id="content"
          className={'' + (this.state.hideSidebar ? ' sidebar-hidden' : '')}>
          <Router>
            <Route exact path="/" component={Main} />
          </Router>
        </div>

        <Toggler
          id="toggler"
          onClick={this.toggle}
          icon={this.state.hideSidebar ? 'open' : 'close' }
          className={'' + (this.state.hideSidebar ? '  sidebar-hidden' : '')} />
      </div>
    )
  }

  toggle = () => {
    this.setState({
      hideSidebar: !this.state.hideSidebar
    })
  }
}

export default App