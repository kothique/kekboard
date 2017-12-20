import React from 'react'
import PropTypes from 'prop-types'
import Component from '../Component'

import './styles/ContainerFormCreate.styl'

class ContainerFormCreate extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired
  }

  static defaultProps = {
    open: false
  }

  render() {
    const { children, open, ...rest } = this.ownProps()

    return (
      <div
        className={'container-form-create card card-body' + (open ? ' open' : '')}
        {...rest}>

        <div
          onClick={this.toggle}
          className="container-form-create-title">
          +
        </div>

        <div className="container-form-create-content">
          {children}
        </div>
      </div>
    )
  }
}

export default ContainerFormCreate