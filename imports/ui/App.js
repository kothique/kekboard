import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Component from '../Component'
import Sidebar from './Sidebar'
import Toggler from './Toggler'
import PageMain from './PageMain'
import PageSection from './PageSection'
import PageThread from './PageThread'
import PageSignUp from './PageSignUp'
import PageSignIn from './PageSignIn'

import './styles/App.styl'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideSidebar: false
    }
  }

  render() {
    const { ...rest } = this.ownProps

    return (
      <div {...rest}>
        <Sidebar
          className={'' + (this.state.hideSidebar ? ' removed' : '')} />

        <div id="content"
          className={'' + (this.state.hideSidebar ? ' sidebar-removed' : '')}>
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
          className={'' + (this.state.hideSidebar ? '  sidebar-removed' : '')} />
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