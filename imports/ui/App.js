import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './App.css'
import Sidebar from './Sidebar'
import Toggler from './Toggler'
import Main from './Main'
import Section from './Section'
import SignUp from './SignUp'
import SignIn from './SignIn'

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
            <Route exact path="/" component={Main} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/:shorthand" component={Section} />
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