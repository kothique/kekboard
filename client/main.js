import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from '../imports/ui/App'

import 'bootstrap/dist/css/bootstrap.min.css'

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root'))
})