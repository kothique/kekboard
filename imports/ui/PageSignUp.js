import React from 'react'

import './styles/PageSignUp.styl'

class PageSignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: undefined
    }
  }

  render() {
    return (
      <article id="page-sign-up">
        <form>
          {this.state.error ? <span id="error">{this.state.error}</span> : <span />}<br />

          <input
            type="text"
            ref={input => this.inputUsername = input}
            placeholder="Your username"
            required /><br />

          <input
            type="email"
            ref={input => this.inputEmail = input}
            placeholder="Your email"
            required /><br />

          <input
            type="password"
            ref={input => this.inputPassword = input}
            placeholder="Your password"
            required /><br />
          
          <button
            ref={button => this.buttonSubmit = button}
            onClick={this.submit}>Sign Up</button>
        </form>
      </article>
    )
  }

  submit = event => {
    event.preventDefault()
    this.setState({
      error: undefined
    })

    let username = this.inputUsername.value,
      email = this.inputEmail.value,
      password = this.inputPassword.value

    if (!username || !email) {
      this.setState({
        error: 'Both username and email must be specified'
      })
    } else {
      Accounts.createUser({
        username,
        email,
        password,
        profile: {}
      }, err => {
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
}

export default PageSignUp