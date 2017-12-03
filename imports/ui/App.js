import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './styles/App.css'
import Sidebar from './Sidebar'
import Toggler from './Toggler'
import PageMain from './PageMain'
import PageSection from './PageSection'
import PageThread from './PageThread'
import PageSignUp from './PageSignUp'
import PageSignIn from './PageSignIn'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hideSidebar: false
    }
  }

  render() {
    return (
      <div>
        <Sidebar
          className={'' + (this.state.hideSidebar ? ' hidden' : '')} />

        <div id="content"
          className={'' + (this.state.hideSidebar ? ' sidebar-hidden' : '')}>
          <Switch>
            <Route exact path="/" component={PageMain} />
            <Route path="/signup" component={PageSignUp} />
            <Route path="/signin" component={PageSignIn} />
            <Route exact path="/:shorthand" component={PageSection} />
            <Route path="/t/:slug" component={PageThread} />
          </Switch>
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