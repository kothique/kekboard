import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar'
import Toggler from './Toggler'
import PageMain from './PageMain'
import PageSection from './PageSection'
import PageThread from './PageThread'
import PageSignUp from './PageSignUp'
import PageSignIn from './PageSignIn'
import PageProfile from './PageProfile'

import './styles/App.styl'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hideSidebar: false
    }
  }

  render() {
    const { hideSidebar } = this.state

    return (
      <Fragment>
        <Sidebar removed={hideSidebar} />

        <div id="content"
          className={hideSidebar ? 'sidebar-removed' : ''}>
          <Switch>
            <Route exact path="/" component={PageMain} />
            <Route path="/signup" component={PageSignUp} />
            <Route path="/signin" component={PageSignIn} />
            <Route path="/profile" component={PageProfile} />
            <Route exact path="/:shorthand" component={PageSection} />
            <Route path="/t/:slug" component={PageThread} />
          </Switch>
        </div>

        <Toggler
          onClick={this.toggleSidebar}
          sidebarRemoved={hideSidebar} />
      </Fragment>
    )
  }

  toggleSidebar = () => {
    const { hideSidebar } = this.state

    this.setState({
      hideSidebar: !hideSidebar
    })
  }
}

export default App