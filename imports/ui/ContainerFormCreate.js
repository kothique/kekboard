import React from 'react'
import PropTypes from 'prop-types'
import Component from '../Component'

import './styles/ContainerFormCreate.styl'

class ContainerFormCreate extends Component {
  static propTypes = {
    form: PropTypes.func,
    formProps: PropTypes.object
  }

  static defaultProps = {
    formProps: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      error: null
    }
  }

  toggleContainer = () => {
    this.setState({
      open: !this.state.open
    })
  }

  onSuccess = () => {
    this.setState({
      open: false,
      error: null
    })
  }

  onFailure = error => {
    this.setState({
      error
    })
  }

  render() {
    const { form: Form, formProps, ...rest } = this.ownProps()
    const { open, error } = this.state

    return (
      <div className={'container-form-create card card-body' + (open ? ' open' : '')}>
        <div
          onClick={this.toggleContainer}
          className="container-form-create-title">
          +
        </div>

        {error
          ? <div className="container-form-create-error">
              {error}
            </div>
          : ''
        }

        <div className="container-form-create-content">
          <Form
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            {...formProps} />
        </div>
      </div>
    )
  }
}

export default ContainerFormCreate