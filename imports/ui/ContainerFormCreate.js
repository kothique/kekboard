import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

import './styles/ContainerFormCreate.styl'

class ContainerFormCreate extends React.Component {
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
    const { form: Form, formProps } = this.props
    const { open, error } = this.state

    return (
      <div className={'container-form-create card card-body' + (open ? ' open' : '')}>
        <Link
          onClick={this.toggleContainer}
          className="container-form-create-title">
          +
        </Link>

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