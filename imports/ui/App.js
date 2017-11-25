import React from 'react'
import { render } from 'react-dom'

import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Toggler from './Toggler'

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
          id="sidebar"
          className={'' + (this.state.hideSidebar ? ' hidden' : '')} />

        <Content
          id="content"
          className={'' + (this.state.hideSidebar ? ' expanded' : '')} />

        <Toggler
          id="toggler"
          onClick={this.toggle}
          icon={this.state.hideSidebar ? 'open' : 'close' }
          className={'' + (this.state.hideSidebar ? '  hidden' : '')} />
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