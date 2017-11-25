import React from 'react'
import { render } from 'react-dom'

import './App.css'
import Sidebar from './Sidebar'

class App extends React.Component {
  render() {
    return (
      <Sidebar id="sidebar" />
    )
  }
}

export default App