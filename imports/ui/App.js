import React from 'react'
import { render } from 'react-dom'

import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar id="sidebar" />
        <Content id="content" />
      </div>
    )
  }
}

export default App