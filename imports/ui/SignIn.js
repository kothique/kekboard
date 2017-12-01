import React from 'react'

import './SignIn.css'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: undefined
    }
  }

  render() {
    return (
      <section id="page-sign-in">
        <form>
          {this.state.error ? <span id="error">{this.state.error}</span> : <span />}<br />

          <input
            type="text"
            ref={input => this.inputLogin = input}
            placeholder="Your username or email"
            required /><br />

          <input
            type="password"
            ref={input => this.inputPassword = input}
            placeholder="Your password"
            required /><br />

          <button
            ref={button => this.buttonSubmit = button}
            onClick={this.submit}>Sign In</button>

        </form>
      </section>
    )
  }

  submit = event => {
    event.preventDefault()
    this.setState({
      error: undefined
    })

    let login = this.inputLogin.value,
      password = this.inputPassword.value

    Meteor.loginWithPassword(login, password, err => {
      if (err) {
        this.setState({
          error: err.reason
        })
      } else {
        this.props.history.push('/')
      }
    })
  }
}

export default SignIn